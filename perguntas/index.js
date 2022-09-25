//Carrega o express para uso
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

//Database
connection
    .authenticate()
    .then(()=>{
        console.log("conexão OK!")
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    });

/*Setando motor de HTML para uso no express
Abrigatorio criar pasta views na raiz
Obrigatorio criar arquivos .ejs dentro 
da pasta views
*/
app.set('view engine', 'ejs');

/*Adicionamento pasta para arquivos estáticos  
 */
app.use(express.static('public'));

/*Adicionando body-parser no Express*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());//Permite ler dados via JSON


//Rota index principal para perguntas
app.get("/", function(req, res){

    Pergunta.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(perguntas=>{
        res.render("boot",{
            perguntas: perguntas
        });
    });

});

//Rota de perguntas com ID
app.get("/perguntar/:id",(req, res)=>{
    var id = req.params.id;

    Pergunta.findOne({
        where:{id: id},
    }).then(pergunta => {
        if(pergunta != undefined){
            Resposta.findAll({
                where:{perguntaId: pergunta.id },
                order:[['id','DESC']]
            }).then(respostas =>{
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        }else{            
            res.redirect("/perguntar");
        }
    });
});


//Rota de perguntas
app.get("/perguntar",function(req, res){
    res.render("perguntar");
});

//Rota para capturar dados do formulario
app.post("/salvarpergunta", (req, res)=>{

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    //Inserindo na tabela pergunta
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/");
    });

});

//Rota responde ao formulário
app.post("/responder",(req, res)=>{
    
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    //Inserindo na tabela resposta
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=>{
        res.redirect("/perguntar/"+perguntaId);
    });

});

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
app.listen(4200, function(erro){
    if(erro){
        console.log("Erro no servidor");
    }else{
        console.log("Servidor rodando");
    }
});