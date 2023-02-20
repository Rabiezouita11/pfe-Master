const firebase = require("./firebaseConfg.js");

module.exports={
    updateMode: (req, callback) => {
            let etat = req.etat;
            firebase.database().ref("mode/").update({
                etat: etat
            });
            callback (null, "Data updated successfully");
    }
}