const firebase = require("../firebaseConfg");

module.exports={
    updateData: (req, callback) => {
            let username = req.username;
            let email = req.email;
            firebase.database().ref("users/"+username+"/").update({
                email: email
            });
            callback (null, "Data updated successfully");
    }
}