const firebase = require("./firebaseConfg.js");

module.exports={
    updateMoteur: (req, callback) => {
            let moteur = req.moteur;
            firebase.database().ref("manual/").update({
                moteur: moteur
            });
            callback (null, "Data updated successfully");
    }
}