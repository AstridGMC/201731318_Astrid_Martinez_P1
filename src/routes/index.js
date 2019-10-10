const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/',(req,res)=> {
    res.render('Inicio',{mas:34})
})

//rutas
router.get('/Inicio',(req, res)=> {
    res.render(path.join( __dirname,'../views/index.ejs'))
});

router.get('/insertarArchivo',(req, res)=> {
    res.render(path.join( __dirname,'../views/insertarArchivo.ejs'))
});

router.get('/header',(req, res)=> {
    res.sendFile(path.join( __dirname,'../public/header.html'))
});

module.exports=router;