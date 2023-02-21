const firebase =  require('./firebaseConfg.js');

module.exports={
    getNomCulture: function (callback){
        
        firebase.database().ref('culture/').once('value', function(snapshot) {
            callback(null, snapshot.val());
            
        });
    }
}