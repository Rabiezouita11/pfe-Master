const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getcapteurPluie: function (callback){
        
        firebase.database().ref('CapteurPluie/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}