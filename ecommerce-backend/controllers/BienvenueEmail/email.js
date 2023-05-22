require('dotenv').config(); // Load environment variables from .env file
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const sendemail = async (req, res) => {
  let email  = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASSWORD, // Use environment variable
    },
  });
  const mailOptions = {
    from: "AgroControl", // sender address
    to: email.email, // list of receivers
    subject: "Bienvenue", // Subject line
    html: `<h1>bienvenue  ${email.nom} </h1><br>
    <h4>vous avez bien inscrit dans notre application</h4><br> `
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent!!!" });
    }
  });
};

module.exports = {
  sendemail
};
