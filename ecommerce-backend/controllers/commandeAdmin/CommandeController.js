const { commande, user } = require("../../models");

const affichercommande = async (req, res, next) => {
  try {
    const commandes = await commande.findAll({
      include: [
        {
          model: user,
          attributes: ["nom", "prenom"], // Include only the 'nom' and 'prenom' attributes of the user
        },
      ],
    });

    // Transform the commandes object to include the user's name
    const commandesWithUser = commandes.map((commande) => ({
      ...commande.toJSON(),
      nom: commande.user.nom,
      prenom: commande.user.prenom,
    }));

    return res.status(200).json(commandesWithUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const accepterCommande = async (req, res, next) => {
  const { id } = req.params; // Assuming you are passing the ID of the commande in the URL params

  try {
    const updatedCommande = await commande.update(
      { etat_commande: true },
      { where: { id } }
    );

    if (updatedCommande[0] === 0) {
      // No rows were affected, indicating that the commande with the given ID does not exist
      return res.status(404).json({ message: "Commande not found" });
    }

    return res.status(200).json({ message: "Commande updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const RefuserCommande = async (req, res, next) => {
  const { id } = req.params; // Assuming you are passing the ID of the commande in the URL params

  try {
    const updatedCommande = await commande.update(
      { etat_commande: false },
      { where: { id } }
    );

    if (updatedCommande[0] === 0) {
      // No rows were affected, indicating that the commande with the given ID does not exist
      return res.status(404).json({ message: "Commande not found" });
    }

    return res.status(200).json({ message: "Commande updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  affichercommande,
  accepterCommande,
  RefuserCommande
};
