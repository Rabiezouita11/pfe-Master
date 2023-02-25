const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const sendemail = async (req, res) => {
  let email  = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "rabie.zouita@esprit.tn", // generated ethereal user
      pass: "120997rabie120997",
    },
  });
  const mailOptions = {
    from: "AgroControl", // sender address
    to: email.email, // list of receivers
    subject: "Bienvenue de AgroControl 👻", // Subject line
    html: `<h1>Hi ${email.nom}</h1><br>
    <h4>Merci de vous joindre a nous</h4>`, // html body
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
