const firebase =  require('./firebaseConfg.js');

module.exports={


    
    getNpk: function (callback){
        
        firebase.database().ref('npk/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}