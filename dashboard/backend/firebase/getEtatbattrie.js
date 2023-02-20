const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getEtatbattrie: function (callback){
        
        firebase.database().ref('EtatBattrie/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}