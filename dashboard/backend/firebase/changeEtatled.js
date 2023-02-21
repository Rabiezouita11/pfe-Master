const firebase = require("./firebaseConfg.js");

module.exports={
    changeEtatled: (req, callback) => {
            let led = req.led;
            firebase.database().ref("manual/").update({
                led: led
            });
            callback (null, "Data updated successfully");
    }
}