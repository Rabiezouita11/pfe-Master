var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth');
const app = require('../firebase/firebaseConfg');




router.post('/login', auth.login);
router.get('/getUser', auth.getUser); //path postman : http://localhost:3000/auth/getUser
router.post('/logout', auth.logout); //path postman : http://localhost:3000/auth/logout












module.exports = router;