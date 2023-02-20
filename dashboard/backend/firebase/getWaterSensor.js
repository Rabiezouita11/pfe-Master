const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getWaterSensor: function (callback){
        
        firebase.database().ref('waterSensor/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}