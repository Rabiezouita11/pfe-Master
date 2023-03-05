
module.exports = (sequelize, Sequelize) => {
    const ListDemandeAbonnement = sequelize.define("ListDemandeAbonnement", {
        id_user: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
              },
              onUpdate: 'cascade',
              onDelete: 'cascade'  // Foreign key has an 'ON DELETE CASCADE' action
            
        },
        id_abonnement: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'abonnement',
                key: 'id'
              },
              onUpdate: 'cascade',
              onDelete: 'cascade'  // Foreign key has an 'ON DELETE CASCADE' action
            
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