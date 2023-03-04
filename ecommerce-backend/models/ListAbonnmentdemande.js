
module.exports = (sequelize, Sequelize) => {
    const ListDemandeAbonnement = sequelize.define("ListDemandeAbonnement", {
        id_user: {
            type: Sequelize.STRING,
            allowNull: false
        },
        id_abonnement: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'en attente'
        },
     
    },
    {
        freezeTableName:true,
        timestamps: false
    }
    )
 
      

    return ListDemandeAbonnement;
};