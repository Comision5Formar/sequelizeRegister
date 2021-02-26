const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {

    const alias = 'Direccion'

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        street : {
            type : dataTypes.STRING(45)
        },
        address : {
            type : dataTypes.INTEGER
        },
        city : {
            type : dataTypes.STRING(45)
        },
        state : {
            type : dataTypes.STRING(45)
        }
    }

    const config = {
        tableName : "direccions",
        timestamps : false
    }

    const Direccion = sequelize.define(alias,cols,config)

    return Direccion
}