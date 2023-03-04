var express = require('express');
var router = express.Router();
const Abonnement = require('../controllers/Abonnement/AbonnementController');
const { UploidImageAbonnement } = require('../middlewares/UploidImageAbonnement');

router.get('/afficherAllAbonnement', Abonnement.afficherAllAbonnement); // http://localhost:8080/abonnement/afficherAllAbonnement
router.post('/ajouterAbonnement', UploidImageAbonnement, Abonnement.ajouterAbonnement); // http://localhost:8080/abonnement/ajouterAbonnement
router.delete('/deleteAbonnement/:id', Abonnement.deleteAbonnement); // http://localhost:8080/abonnement/deleteAbonnement/1
router.put('/updateAbonnement/:id', Abonnement.updateAbonnement); // http://localhost:8080/abonnement/updateAbonnement/1
router.get('/afficherAbonnement/:id', Abonnement.getAbonnementById); // http://localhost:8080/abonnement/afficherAbonnement/1

router.post('/ajouterIduserandidabonnement', Abonnement.ajouterIduserandidabonnement); // http://localhost:8080/abonnement/ajouterIduserandidabonnement




module.exports = router;