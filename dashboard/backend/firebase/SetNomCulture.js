const firebase = require("./firebaseConfg.js");

module.exports = {
    setNomCultrue: (req, callback) => {
        let nom = req.nom;
        let n = req.n;
        let p = req.p;
        let k = req.k;
        let humidity = req.humidity;
        let MaxT = req.MaxT;
        let MinT = req.MinT;
        let MaxH = req.MaxH;
        let MinH = req.MinH;




        let MinN = req.MinN;
        let MaxN = req.MaxN;

        let MinP = req.MinP;
        let MaxP = req.MaxP;

        let MinK = req.MinK;
        let MaxK = req.MaxK;


        let maxHSol = req.maxHSol;
        let minHSol = req.minHSol;


        firebase.database().ref("culture/").update({
            nom: nom
        });
        firebase.database().ref("culture/npk/n").update({
            MaxN: MaxN,
            MinN: MinN
        });
        firebase.database().ref("culture/npk/p").update({
            MaxP: MaxP,
            MinP: MinP
        });
        firebase.database().ref("culture/npk/k").update({
            MaxK: MaxK,
            MinK: MinK
        });

        firebase.database().ref("culture/air/temperature").update({

            MaxT: MaxT,
            MinT: MinT
        });

        firebase.database().ref("culture/air/humidity_air").update({

            MaxH: MaxH,
            MinH: MinH
        });
        firebase.database().ref("culture/sol/").update({

            maxHSol : maxHSol,
            minHSol : minHSol
        });

        callback(null, "Data updated successfully");
    }
}