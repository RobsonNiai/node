const express = require("express");//Importando Express
const app = express();//Iniciando o Express


//Rota
app.get("/",function(req, res){
    res.send("<h1>Teste de rotas</h1>");
});

//Rota Blog
app.get("/blog",function(req, res){
    res.send("<h1>Pagina blog</h1>")
});

//Rota Cadastro com Parametros Fixos e Obrigatórios
app.get("/cadastro/:nome/:idade", function(req, res){
    res.send("Nome: " + req.params.nome + " Idade: " + req.params.idade );
});

//Rota Registro com Parametros Fixos
app.get("/registro/:nome?/:idade?", function(req, res){
    res.send("Nome: " + req.params.nome + " Idade: " + req.params.idade );
});

//Rota Solicita com Query Parametros, não usado atualmente
app.get("/solicita", function(req, res){
    var nome = req.query["nome"];
    res.send("Nome: " + nome );
});

//Abrindo o servidor
app.listen(4000,function(erro){
    if(erro){
        console.log("Servidor com erro");
    }else{
        console.log("Servidor rodando");
    }
});

