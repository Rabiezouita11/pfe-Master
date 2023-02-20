const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getTemperatureAir: function (callback){
        
        firebase.database().ref('Air/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}