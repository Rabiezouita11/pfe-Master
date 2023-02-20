const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getMode: function (callback){
        
        firebase.database().ref('mode/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}