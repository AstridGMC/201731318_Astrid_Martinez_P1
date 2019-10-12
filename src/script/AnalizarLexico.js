

var operadores = ['+', '-', '*', '/', '%', '=', '==', '<', '>', '<=', '>=']
var palabrasReservadas = ['variable', 'entero', 'decimal', 'booleano', 'cadena', 'si', 'sino', 'mientras', 'hacer'];
var agrupadores = ['(', ')', '{', '}']
var signos = ['"', ";"]
var booleanos = ["TRUE", "FALSE"]
var tablaDeSimbolos = [
    //columna          0        1        2       3         4        5        6        7        8        9       10     11        12        13      14        15       16       17       18       19 
    //Lenguaje:       A-z      0-9      .        +         -        *        /        %        =       ==       <      >         <=        >=      (         )        {        }        "         ;
    /*eSTADOS;s3*/[  's3' , 's3'  , 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error'],
    /*        s4*/['error','error', 'error',  's4'  ,   's4' ,  's4'  ,  's4'  ,   's4' ,   's4' ,   's4' ,  's4'  ,  's4'  ,  's4'  ,  's4'  , 'error', 'error', 'error', 'error', 'error', 'error'],
    /*        s5*/['error','error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error',   's5' ,  's5'  ,  's5'  ,  's5'  , 'error', 'error'],
    /*        s6*/['error','error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error',  's6' ,   's6'  ],
    /*        s7*/['error', 's7'  ,  's8'  , 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error'],
    /*        s8*/['error', 's9'  , 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error'],
    /*        s9*/['error', 's9'  , 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error'],
    /*eSTADOS;s0*/[  's3' , 's7'  , 'error',  's4'  ,  's4'  ,  's4'  ,  's4'  ,  's4'  ,  's4'  ,  's4'  ,  's4'  ,  's4'  ,  's4'  ,  's4'  ,   's5' ,   's5' ,   's5' ,   's5' ,  's6'  ,   's6' ],
]




function reconocerPalabraReservada(palabra) {
    var palabraRes;
    for (var i = 0; i < palabrasReservadas.length; i++) {
        if (palabrasReservadas[i] == palabra) {
            console.log(palabrasReservadas[i]+ " ESTA ES LA PALABRA")
            palabraRes = 21;
            break; 
        } else {
            palabraRes = 100;
        }
    }
    console.log(palabraRes);
    return palabraRes;
}

function reconocerBooleano(palabra) {
    var esBooleano;
    for (var i = 0; i < booleanos.length; i++) {
        if (booleanos[i] == palabra) {
            esBooleano = 22;
            breake;
        } else {
            esBooleano = 100;
        }
    }
    return esBooleano;
}
function reconocerOperadores(char) {
    var esOperador;
    for (var i = 0; i < operadores.length; i++) {
        if (operadores[i] == char) {
            esOperador = i + 3;
            return esOperador;
        } else {
            esOperador = 100;
        }
    }
    return esOperador;
}
function reconocerLetra(char) {
    let ascii = char.toUpperCase().charCodeAt(0);
        console.log(ascii);
    if (ascii > 64 && ascii < 91) {
        return 0;
    } else {
        return 100;
    }
}

function reconocerSimboolo(char) {
    var pos;
    for (var i = 0; i < signos.length; i++) {
        if (char == signos[i]) {
            pos = i + 18;
            return pos;
        } else {
            return 100;
        }
    }
}

function reconocerAgrupadores(char) {
    var pos;
    for (var i = 0; i < agrupadores.length; i++) {
        if (char == agrupadores[i]) {
            pos = i + 14;
            return pos;
        } else {
            return 100;
        }
    }
}

function reconocerNumero(char) {
    if (isNaN(char)) {
        return 100;
    } else {
        return 1;
    }
}
function reconocerPunto(char) {
    if (char == '.') {
        return 2;
    } else if (char != '.') {
        return 100;
    }
}

function reconocerEstadosPrimeros(palabra) {
    if (reconocerPalabraReservada(palabra) != 100) {
        return 's1';
    } else if (reconocerBooleano(palabra) != 100) {
        return 's2';
    } else {
        return INICIO;
    }
}
function reconocerEstados(char) {
    if (reconocerNumero(char) != 100) {

        return reconocerNumero(char);

    } else if (reconocerAgrupadores(char) != 100) {

        return reconocerAgrupadores(char);

    } else if (reconocerOperadores(char) != 100) {

        return reconocerOperadores(char);

    } else if (reconocerSimboolo(char) != 100) {

        return reconocerSimboolo(char);

    } else if (reconocerLetra(char) != 100) {
        return reconocerLetra(char);

    } else if(reconocerPunto(char)!=100){
        return reconocerPunto(char);
    }else{
        return 100;
    }
}

function reconcerEstadosNoo(char, estActual) {
    if (reconocerLetra(char) != 0) {
        return reconocerLetra(char);
    } else if (reconocerNumero(char) != 0) {
        if (estActual == 's3') {
            return 's3';
        } else if (estActual == 's0') {
            return 's4';
        } else if (estActual == 's7') {
            return 's4'
        } else if (estActual == 's8') {
            return 's4'
        }
    } else if (reconocerAgrupadores(char) != 0) {
        return 's5'
    } else if (reconocerOperadores(char) != 0) {
        return 's4'
    } else if (reconocerSimboolo(char) != 0) {
        return 's6'
    } else {
        return INICIO
    }
}

var Estado;
var INICIO = 's0';
var actual;
var estadoFinal;

function analizadorLexico(palabra) {
    cadenaRechazada = false;
    miPalabra = String(palabra);
    actual= INICIO;
    console.log(palabra)
    console.log(miPalabra.length);
    var posicion = 0;
    if (reconocerEstadosPrimeros(palabra) == INICIO) {
        while (posicion < miPalabra.length) {
            var char = miPalabra.charAt(posicion);
            console.log(char);

            switch (actual) {

                case 's0':
                    console.log(reconocerEstados(char) + "   numero  estsado");
                    actual = tablaDeSimbolos[7][reconocerEstados(char)];
                    console.log(actual + "estado Actual");
                    break;

                case 's3':
                    if (tablaDeSimbolos[0][reconocerEstados(char)] != 'error') {
                        actual = tablaDeSimbolos[0][reconocerEstados(char)];
                        console.log(actual);
                    }
                    break;

                case  's4':
                        actual = tablaDeSimbolos[1][reconocerEstados(char)];
                        console.log(actual);
                    
                    break;

                case 's5':
                        actual = tablaDeSimbolos[2][reconocerEstados(char)];
                        console.log(actual);
                    
                    break;

                case  's6':
                        actual = tablaDeSimbolos[3][reconocerEstados(char)];
                        console.log(actual);
                    
                    break;

                case 's7':
                        console.log("estado s7 "+ reconocerEstados(char));
                        actual = tablaDeSimbolos[4][reconocerEstados(char)];
                        console.log(actual);
                    
                    break;

                case 's8':
                        actual = tablaDeSimbolos[5][reconocerEstados(char)];
                        console.log(actual);
                    
                    break;

                case 's9':
                        actual = tablaDeSimbolos[6][reconocerEstados(char)];
                        console.log(actual);
                    
                    break;

                case 'error':
                        cadenaRechazada = true;
                        actual= 's0';
                        console.log(actual);
                    break;
            }
            posicion= posicion+1;
            if(cadenaRechazada==true){
                break;
            }
            
        }
    } else if (reconocerEstadosPrimeros(palabra) != INICIO) {
        actual = reconocerEstadosPrimeros(palabra);
    }
    console.log("esta Retorando"+ actual);
    esEstado = NombrarEstados(actual);
}
var esEstado; 
function NombrarEstados(actual){
    console.log(actual + "final");
    if(actual == 's1'){
        return 'Palabra Reservada';
    }else if(actual=='s2'){
        return 'Boolean';
    }else if(actual=='s3'){
        return 'Identificador';
    }else if(actual=='s4'){
        return 'Operador';
    }else if(actual=='s5'){
        return 'Agrupador'
    }else if(actual=='s6'){
        return 'Signo'
    }else if(actual=='s7'){
        return 'Entero'
    }else if(actual=='s8'){
        return 'Error'
    }else if(actual=='s9'){
        return 'Float'
    }else if(actual=='s0'){
        return 'Error'
    }
}
var est;
var automata = function automataCompleto(palabra){
    analizadorLexico(palabra);
    console.log(esEstado);
    return esEstado;
}

module.exports = automata ;