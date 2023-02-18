const firebase = require("../firebaseConfg");

module.exports={
    saveData: function (req , callback){
    let username = req.username;
    let email = req.email;
    firebase.database().ref('users/' + username).set({
        username: username,
        email: email
    
    });
        callback(null, {"statutscode":200 , "message" : "Data saved successfully"});

    }
}