const nodemailer = require("nodemailer");

const mailing = async (userEmail, otp) => {
  try {
    let config = {
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(config);

    let message = {
      from: process.env.GMAIL_USERNAME,
      to: userEmail,
      subject: "One-time verification code",
      html: `
      <div style="padding: 10px; background-color: black; border: 1px solid #c3c3c3; border-radius:8px">
      <h1 style="color:#fff;">Action Required: One-Time Verification Code</h1>
      <p style="color:#cfcfcf;">You are receicing this email because a request was made for a one-tome code that can be used for authenciation</p>
      <p style="color:#cfcfcf;">Please enter the following code for verification:-</p>
      <h2 style="text-align:center">${otp}</h2>
      <p style="color:#cfcfcf;">If you did not request this change, please change your password, and if you face any issue, please inform to admin</P>
      </div>
      <p style="text-align:center; color:#cfcfcf;">@BRCM college of Engineering & Technology</p>
      `,
    };
    transporter
      .sendMail(message)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
};

module.exports = mailing;
