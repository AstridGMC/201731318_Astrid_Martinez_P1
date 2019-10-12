const express = require('express');
const router = express.Router();
const path = require('path');
const automata = require('../script/AnalizarLexico')

var arregloDeLineas;
var palabra
var palabraRecibida;
router.use(express.json());



//rutas
router.get('/Inicio', (req, res) => {
  res.render(path.join(__dirname, '../views/index.ejs'))
});

router.get('/header', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/header.html'))
});

router.get('/insertarArchivo', (req, res) => {
  res.render(path.join(__dirname, '../views/insertarArchivo.ejs'))
});

router.get('/insertarPalabra', (req, res) => {
  res.render(path.join(__dirname, '../views/insertarPalabra.ejs'))
}); 

router.get('/Diagrama', (req, res) => {
  res.render(path.join(__dirname, '../views/Diagrama.ejs'))
});


//metodos get y post 
router.post('/code', (req, res) => {

  console.log(req.body.codigo);
  console.log('tam arreglo:' + req.body.ArregloLineas.length);
  arregloDeLineas = req.body.ArregloLineas;
  res.send('funciono');
});

router.get('/recibirDatos', (req, res) => {

  res.json({
    tipo: identificarTokenLinea(),
    token: palabra
  });

  console.log(palabra+"palabra enviada");
  console.log(identificarTokenLinea());

});


router.post('/EnviaToken', (req, res) => {
  console.log('letra:' + req.body.textoEnviado);
  palabraRecibida =  req.body.textoEnviado;
  res.send('funciono');
});

router.get('/recibirTipo', (req, res) => {

  res.json({
    tipo: identificarTokenTexto(),
    token: palabraRecibida
  });

  console.log(palabraRecibida+"palabra enviada");
  console.log(identificarTokenTexto());

});

var i = 0;
var j = 0;
//funciones
function identificarTokenLinea() {

  var palabras;
  if (i < arregloDeLineas.length) {
    var linea = arregloDeLineas[i];
    palabras = linea.split(" ");
    if (j < palabras.length) {
      palabra = palabras[j];
      j = j + 1;
      console.log(palabras[j] + "    las palabras")
      console.log(automata(palabras[j]));
      return automata(palabras[j]);
    } else if (j = palabras.length-1 ){
      i = i + 1;
      j=0;
      console.log(i+"     palabra aumentada");
    }
  }
}

function identificarTokenTexto(){
  console.log(palabraRecibida);
  return automata(palabraRecibida);
}

module.exports = router;