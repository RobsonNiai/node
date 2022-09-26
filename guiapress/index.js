const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//View engine
app.set('view engine','ejs');

//Load static files
app.use(express.static('public'));

//Configurate body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database connection
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão com banco OK");
    }).catch((error)=>{
        console.log(error);
    })


app.use("/", categoriesController);    

app.use("/", articlesController);    

app.get("/", (req,res)=>{
    res.render("index");
})

app.listen(8080, ()=>{
    console.log("servidor rodando");
})