const firebase = require("./firebaseConfg.js");

module.exports={
    setNomCultrue: (req, callback) => {
            let nom = req.nom;
            let n = req.n;
            let p = req.p;
            let k = req.k;
            let humidity = req.humidity;
            let temperature = req.temperature;
            let humidity_air = req.humidity_air;
            firebase.database().ref("culture/").update({
                nom: nom
            });
            firebase.database().ref("culture/npk/").update({
                n: n, 
                p: p,
                k: k
            });
            firebase.database().ref("culture/air/").update({
              
                humidity_air: humidity_air,
                temperature: temperature
            });
            firebase.database().ref("culture/sol/").update({
              
                humidity: humidity,
            });

            callback (null, "Data updated successfully");
    }
}