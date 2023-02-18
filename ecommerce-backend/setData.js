const firebase = require("./firebaseConfg");

module.exports={
    saveData: function (req , callback){
    let username = req.username;
    firebase.database().ref('users/' + username).set({
        username: username,
    
    });
        callback(null, {"statutscode":200 , "message" : "Data saved successfully"});

    }
}