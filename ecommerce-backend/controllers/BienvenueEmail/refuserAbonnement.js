const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const RefuserAbonnement = (email, nom ) => {
 
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
    html: `<h1>bonsoir  ${nom} </h1><br>
    <h4>votre  demande refuser</h4><br> `
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log("Error occurs");
    }
    return console.log("Email sent!!!");
  });
};

module.exports = {
    RefuserAbonnement
};
