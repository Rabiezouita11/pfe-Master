const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const StatusAbonnementEmail = (email ) => {
 
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "", // generated ethereal user
      pass: "",
    },
  });
  const mailOptions = {
    from: "AgroControl", // sender address
    to: email, // list of receivers
    subject: "Status de votre Demande", // Subject line
    html: `<h1>bonsoir  </h1><br>
    <h4>votre demande en Cours de traitement</h4><br> `
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log("Error occurs");
    }
    return console.log("Email sent!!!");
  });
};

module.exports = {
    StatusAbonnementEmail
};
