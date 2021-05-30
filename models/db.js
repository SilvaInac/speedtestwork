const Sequelize = require('sequelize')
    //Conexão com o MySql
    const sequelize = new Sequelize('cadastro','root','Du190401',{
        host:"localhost",
        dialect: 'mysql'
    })

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }
