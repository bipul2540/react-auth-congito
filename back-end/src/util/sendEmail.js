import nodemailer from "nodemailer";

export const sendEmail = (msg) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "robert.david2540@gmail.com",
      pass: "cwwmecgtyaxcbvlh",
    },
  });

  // const msg = { to, from, subject, text };
  console.log(msg);

  transporter.sendMail(msg, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
};
