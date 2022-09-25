const Sequelize = require('sequelize');

//Criando conexão com banco de dados
const connection = new Sequelize('guiaperguntas','root','Niaih2so44#',{
    host: 'localhost',
    dialect: 'mysql'
})

//Exportando conexão
module.exports = connection;