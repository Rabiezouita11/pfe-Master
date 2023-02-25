const { abonnement } = require("../../models");






const ajouterAbonnement = async (req, res, next) => {
    try {
        const { nom, Prix, description } = req.body;
        const image = req.files[0].path;
        abonnementdejaexiste = await abonnement.findOne({ where: { nom: nom } });
        if (abonnementdejaexiste) {
        return res.status(400).json({ error: "abonnement deja existe" });
        } else {
        const newAbonnement = await abonnement.create({
            nom,
            Prix,
            description,
            image,
        });
        if (newAbonnement) {
            return res.status(201).json(newAbonnement);
        }
        }
    } catch (error) {
    console.log(error.message)
    }
    };

    const afficherAllAbonnement = async (req, res, next) => {
    try {
        const abonnements = await abonnement.findAll();
        if (abonnements) {
        return res.status(200).json(abonnements);
        }
    } catch (error) {
        console.log(error.message);
    }
    }

    const deleteAbonnement = async (req, res, next) => {

    try {
        const { id } = req.params;
        const deleteabonnement = await abonnement.destroy({
        where: { id: id },
        });
        if (deleteabonnement) {
        return res.status(200).json({ message: "abonnement deleted" });
        }
    } catch (error) {
        console.log(error.message);
    }
    }

    const updateAbonnement = async (req, res, next) => {


    try {
        const { id } = req.params;
        const { nom, Prix, description } = req.body;
        const image = req.files[0].path;
        const updateabonnement = await abonnement.update(
        {
            nom,
            Prix,
            description,
            image,
        },
        { where: { id: id } }
        );
        if (updateabonnement) {
        return res.status(200).json({ message: "abonnement updated" });
        }
    } catch (error) {
        console.log(error.message);
    }
    };


    module.exports = {
    ajouterAbonnement,
    afficherAllAbonnement,
    deleteAbonnement,
    updateAbonnement
    };

    
