const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getData: function (callback){
        
        firebase.database().ref('wifi/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}