// imports 
const path = require('path');
const fileUpload = require('express-fileupload');
const fs=require('fs');

//frameworks
const express = require('express');
const app = express();
var publicPath = path.resolve(__dirname, 'public'); 


// configuraciones
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.set('port', 3000);

//rutas
app.use(require('./routes/index'));

app.use(express.static(publicPath)); 
//escucha

app.listen(app.get('port'), ()=> {
    console.log('escuchando e el puerto ' , app.get('port'));

}); 