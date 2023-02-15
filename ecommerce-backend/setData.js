const firebase = require("./firebaseConfg");

module.exports={
    saveData: function (req , res){
        const db = firebase.database();
        const ref = db.ref("users");
        ref.push({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.send("Data saved");
    }
}