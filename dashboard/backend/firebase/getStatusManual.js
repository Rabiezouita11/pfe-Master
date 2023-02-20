const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getStatusmanual: function (callback){
        
        firebase.database().ref('manual/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}