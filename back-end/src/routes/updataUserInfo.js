import jwt from "jsonwebtoken";
import { ObjectID } from "mongodb";

import { getDbConnection } from "../db";

export const updateUserInfo = {
  path: "/api/users/:userId",
  method: "put",

  handler: async (req, res) => {
    const { authorization } = req.headers;
    const { userId } = req.params;

    // we are doing this so that any other data cannot be send through the field
    const updates = (({ favoriteFood, hairColor, bio }) => ({
      favoriteFood,
      hairColor,
      bio,
    }))(req.body);

    if (!authorization) {
      return res.status(401).json({ message: "No authorization header sent" });
    }

    // token format **BEARER lafla.fafjasdfjaofjas;dfa;
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err)
        return res.status(401).json({ message: "unable to verify users" });

      const { id, isVerified } = decoded;

      if (id !== userId) {
        return res
          .status(403)
          .json({ message: "not allowed to updata users data" });
      }

      if (!isVerified)
        return res.status(403).json({
          message:
            "you need t verify your email before you can update your data. ",
        });

      const db = getDbConnection("react-auth-db");
      const result = await db
        .collection("users")
        .findOneAndUpdate(
          { _id: ObjectID(id) },
          { $set: { info: updates } },
          { returnOriginal: false }
        );

      const { email, info } = result.value;

      jwt.sign(
        {
          id,
          email,
          isVerified,
          info,
        },
        process.env.JWT_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) {
            return res.status(404).json(err);
          } else {
            res.status(200).json({ token });
          }
        }
      );
    });
  },
};
