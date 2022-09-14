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
//Mandando variaveis para o HTML
//Usando Parametros não obrigatórios
app.get("/:nome?/:lang?", function(req, res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscrito: 8000
    });
});


//Inicia o servidor
app.listen(8080, function(erro){
    if(erro){
        console.log("Erro no servidor");
    }else{
        console.log("Servidor rodando");
    }
});