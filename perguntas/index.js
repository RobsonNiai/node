//Carrega o express para uso
const express = require("express");
const app = express();

/*Setando motor de HTML para uso no express
Abrigatorio criar pasta views na raiz
Obrigatorio criar arquivos .ejs dentro 
da pasta views
*/
app.set('view engine', 'ejs');

//Rota padrão para teste redenrizando .ejs
//Não precisa colocar a extensão .ejs
app.get("/", function(req, res){
    res.render("index.ejs");
});


//Inicia o servidor
app.listen(8080, function(erro){
    if(erro){
        console.log("Erro no servidor");
    }else{
        console.log("Servidor rodando");
    }
});