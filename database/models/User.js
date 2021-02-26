module.exports = (sequelize, dataTypes) => {

    const alias = "Usuarios"

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        email : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        pass : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        avatar : {
            type : dataTypes.STRING(45),
        },
        direccionId : {
            type : dataTypes.INTEGER
        }
    }

    const config = {
        tableName : 'users',
        timestamps : false,
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function(models) {
        User.belongsTo(models.Direccion, {
            as : "direccion",
            foreignKey : 'direccionId'
        })
    }

    return User;

}