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
    },
    plano: {
        type: db.Sequelize.INTEGER
    },
    speed_dl: {
        type: db.Sequelize.INTEGER
    },
    speed_ul: {
        type: db.Sequelize.INTEGER
    }
})

//criando model
//User.sync({foce: true})

module.exports = User
