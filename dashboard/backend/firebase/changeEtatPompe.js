
const firebase = require("./firebaseConfg.js");

module.exports={
    updateEtatpompe: (req, callback) => {
            let pompe = req.pompe;
            firebase.database().ref("manual/").update({
                pompe: pompe
            });
            callback (null, "Data updated successfully");
    }
}