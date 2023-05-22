var express = require("express");

var router = express.Router();
const commandeAdmin = require("../controllers/commandeAdmin/index");



router.get("/affichercommande", commandeAdmin.affichercommande); // http://localhost:3000/commandeAdmin/affichercommande

router.put("/accepterCommande/:id", commandeAdmin.accepterCommande); // http://localhost:3000/commandeAdmin/modifiercommande/1

router.put("/refuserCommande/:id", commandeAdmin.RefuserCommande); // http://localhost:3000/commandeAdmin/modifiercommande/1








module.exports = router;