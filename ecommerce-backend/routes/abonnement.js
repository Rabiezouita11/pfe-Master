var express = require('express');
var router = express.Router();
const Abonnement = require('../controllers/Abonnement/AbonnementController');


router.get('/afficherAllAbonnement', Abonnement.afficherAllAbonnement); // http://localhost:8080/abonnement/afficherAllAbonnement
router.post('/ajouterAbonnement', Abonnement.ajouterAbonnement); // http://localhost:8080/abonnement/ajouterAbonnement
router.delete('/deleteAbonnement/:id', Abonnement.deleteAbonnement); // http://localhost:8080/abonnement/deleteAbonnement/1
router.put('/updateAbonnement/:id', Abonnement.updateAbonnement); // http://localhost:8080/abonnement/updateAbonnement/1







module.exports = router;