const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getCaptureCo2: function (callback){
        
        firebase.database().ref('capteur Co2/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}