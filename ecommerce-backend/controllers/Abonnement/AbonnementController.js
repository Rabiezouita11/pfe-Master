const { user, abonnement, ListDemandeAbonnement } = require("../../models");
const { StatusAbonnementEmail } = require("../BienvenueEmail/StatusAbonnementEmail");
const { accepteAbonnement } = require("../BienvenueEmail/accepteAbonnement");
const { RefuserAbonnement } = require("../BienvenueEmail/refuserAbonnement");

const ajouterIduserandidabonnement = async (req, res, next) => {
    try {
        const { id_user, id_abonnement } = req.body;
        const idUserExisteDansUser = await user.findOne({ where: { id: id_user } });
        const idAbonnementExisteDansAbonnement = await abonnement.findOne({ where: { id: id_abonnement } });
        const idUserExisteDansListDemandeAbonnement = await ListDemandeAbonnement.findOne({ where: { id_user: id_user } });
        const email = await user.findOne({ where: { id: id_user } });

        if (!idUserExisteDansUser) {
            return res.status(400).json({ error: "id user n'existe pas" });
        }
        if (!idAbonnementExisteDansAbonnement) {
            return res.status(400).json({ error: "id abonnement n'existe pas" });
        }
        if (idUserExisteDansListDemandeAbonnement) {
            return res.status(400).json({ error: "id user existe deja dans la liste des abonnements" });
        }


        const newAbonnement = await ListDemandeAbonnement.create({
            id_user,
            id_abonnement,
        });
        if (newAbonnement) {
            StatusAbonnementEmail(email.email, email.nom);
            return res.status(201).json(newAbonnement);

        }
    } catch (error) {
        console.log(error.message)

    }
};



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



const getAbonnementById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const abonnements = await abonnement.findOne({ where: { id: id } });

        if (abonnements) {
            return res.status(200).json(abonnements);
        } else {
            return res.status(400).json({ error: "abonnement not found" })
        }
    } catch (error) {
        console.log(error.message);
    }


};


const xx = async (req, res, next) => {
    try {


        const abonnements = await ListDemandeAbonnement.findAll({

            include: [
                {
                    model: user,
                    attributes: ["nom"],
                },
                {
                    model: user,
                    attributes: ["id"],
                },
                {
                    model: abonnement,

                    attributes: ["Prix"],
                },

                {
                    model: abonnement,
                    attributes: ["nom"],
                }
            ],
        });
        if (abonnements) {
            return res.status(200).json(abonnements);
        }
    } catch (error) {
        console.log(error.message);
    }
};


const UpdateStatusAcepteAbonnement = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { id_user } = req.body;
        const findUser = await user.findOne({ where: { id: id_user } });
        // updated table user attribut agri = true 


        const updateabonnement = await ListDemandeAbonnement.update(
            {
                status: "accepte",
            },
            { where: { id: id } }
        );
        if (updateabonnement) {
            const updateuser = await user.update(
                {
                    agri: "true",
                },
                { where: { id: id_user } }
            );
            accepteAbonnement(findUser.email, findUser.nom);
            return res.status(200).json({ message: "abonnement updated" });
        }
    } catch (error) {
        console.log(error.message);
    }
};




const UpdateStatusRefuserAbonnement = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { id_user } = req.body;
        const findUser = await user.findOne({ where: { id: id_user } });
        const updateabonnement = await ListDemandeAbonnement.update(
            {
                status: "refuser",
            },
            { where: { id: id } }
        );
        if (updateabonnement) {
            RefuserAbonnement(findUser.email, findUser.nom);
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
    updateAbonnement,
    getAbonnementById,
    ajouterIduserandidabonnement,
    xx,
    UpdateStatusAcepteAbonnement,
    UpdateStatusRefuserAbonnement
};


