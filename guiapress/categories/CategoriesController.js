const express = require("express");
const router = express.Router();

router.get("/categories",(req,res)=>{
    res.send("ROTA CATEGORIAS");
});

router.get("/admin/categories/new",(req,res)=>{
    res.secure("ROTA PARA CRIAR UMA NOVA CATEGORIA");
});

module.exports = router;