const firebase = require("./firebaseConfg.js");

module.exports={
    updateMode: (req, callback) => {
            let etat = req.etat;
            firebase.database().ref("mode/").update({
                etat: etat
            });
            firebase.database().ref("manual/").update({
                led: 'OFF',
                pompe: 'OFF',
                ventilateur: 'OFF',
                moteur: 'OFF',
            });
            callback (null, "Data updated successfully");
    }
}