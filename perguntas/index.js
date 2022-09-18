//Carrega o express para uso
const express = require("express");
const app = express();

/*Setando motor de HTML para uso no express
Abrigatorio criar pasta views na raiz
Obrigatorio criar arquivos .ejs dentro 
da pasta views
*/
app.set('view engine', 'ejs');

/*Adicionamento pasta para arquivos estáticos  
 */
app.use(express.static('public'));

//Rota para trabalhar com bootstrap
app.get("/boot", function(req, res){
    res.render("boot");
})

//Rota de perguntas
app.get("/perguntar",function(req, res){
    res.render("perguntar");
})

//Rota padrão para teste redenrizando .ejs
//Não precisa colocar a extensão .ejs
//Mandando variaveis para o HTML
//Usando Parametros não obrigatórios
app.get("/:nome?/:lang?", function(req, res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;
    var produtos=[
        {nome:"Doritos", preco:3.14},
        {nome:"Coca-cola", preco:5.0},
        {nome:"Leite", preco:1.45}
    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscrito: 8000,
        msg: exibirMsg,
        produtos: produtos
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