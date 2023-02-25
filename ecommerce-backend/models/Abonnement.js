
module.exports = (sequelize, Sequelize) => {
    const Abonnement = sequelize.define("Abonnement", {
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Prix: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },    
    },
    {
        freezeTableName:true,
        timestamps: false
    }
    )
 
      

    return Abonnement;
};