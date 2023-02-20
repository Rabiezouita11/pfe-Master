const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getHumiditySol: function (callback){
        
        firebase.database().ref('Sol/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}