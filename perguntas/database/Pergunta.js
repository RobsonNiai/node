const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowfull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowfull: false
    }
});

Pergunta.sync({force: false}).then(()=>{
    console.log("Tabela criada");
});

module.exports = Pergunta;