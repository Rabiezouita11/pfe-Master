
const firebase = require("./firebaseConfg.js");

module.exports={
    updateEtatventilateur: (req, callback) => {
            let ventilateur = req.ventilateur;
            firebase.database().ref("manual/").update({
                ventilateur: ventilateur
            });
            callback (null, "Data updated successfully");
    }
}