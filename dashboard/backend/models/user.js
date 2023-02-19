
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mot_de_passe: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cin: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
       
        role: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type:Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
       
      
    },
    {
        timestamps: false
    }
    )


    return User;
};

// write  const all data of user in this file
//
//
//
//
//

// write  const all data of user in this file
//
//
//
//


