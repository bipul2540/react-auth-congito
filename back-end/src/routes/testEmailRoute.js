import { sendEmail } from "../util/sendEmail";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

import { v4 as uuidv4 } from "uuid";
uuidv4();

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      const { _id, email } = req.body;

      const details = {
        from: "robert.david2540@gmail.com",
        to: "bipulkumar73520@gmail.com",
        subject: "Does this work",
        text: "yes it works",
      };
      sendEmail(details);

    } catch (err) {
      res.sendStatus(500);
    }
  },
};
