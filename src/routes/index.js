const express = require('express');
const router = express.Router();
const path = require('path');
const fileUpload = require('express-fileupload');
const formidable = require('formidable');

router.use(express.json());

miArchivo=" ";

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



router.get('/token',(req, res)=> {
  res.json({
    tipo: 'id',
    valor: 'valor'
  });
});

router.post('/code',(req, res)=>{

    console.log(req.body.codigo);
    console.log('tam arreglo:'+req.body.ArregloLineas.length);
    res.send('funciono');
});



router.get('/header',(req, res)=> {
    res.sendFile(path.join( __dirname,'../public/header.html'))
});


function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var i = 0
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        var lines = e.target.result.split('/n');
        var line;
        for (line = 0; line < lines.length; line++) {
            console.log(lines[line]);

        }
    };
    lector.readAsText(archivo); 
    
}
module.exports=router;