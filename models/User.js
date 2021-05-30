const { post } = require('../SpeedTest')
const db = require('./db')

const User = db.sequelize.define('usuarios',{
    user: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

//criando model
//User.sync({foce: true})

module.exports = User
