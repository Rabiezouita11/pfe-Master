const firebase = require("firebase");
const app = firebase.initializeApp({
    apiKey: "AIzaSyAWgh4R-w-MQEfYplgcnmURe4wKMTw1it8",
    authDomain: "laravel-d3c53.firebaseapp.com",
    databaseURL: "https://laravel-d3c53-default-rtdb.firebaseio.com/",
});
module.exports = app;