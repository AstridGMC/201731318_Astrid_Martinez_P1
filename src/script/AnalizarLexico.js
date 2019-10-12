

var operadores = ['+', '-', '*', '/', '%', '=', '==', '<', '>', '<=', '>=']
var palabrasReservadas = ['variable', 'entero', 'decimal', 'booleano', 'cadena', 'si', 'sino', 'mientras', 'hacer'];
var agrupadores = ['(', ')', '{', '}']
var signos = ['"', ";"]
var booleanos = ["TRUE", "FALSE"]
var tablaDeSimbolos = [
    //columna          0        1        2       3         4        5        6        7        8        9       10     11        12        13      14        15       16       17       18       19 
    //Lenguaje:       A-z      0-9      .        +         -        *        /        %        =       ==       <      >         <=        >=      (         )        {        }        "         ;
    /*eSTADOS;s3*/[  's3' , 's3'  , 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error'],
    /*        s4*/['error','error', 'error',  'S4'  ,   'S4' ,  'S4'  ,  'S4'  ,   'S4' ,   'S4' ,   'S4' ,  'S4'  ,  'S4'  ,  'S4'  ,  'S4'  , 'error', 'error', 'error', 'error', 'error', 'error'],
    /*        s5*/['error','error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error',   's5' ,  's5'  ,  's5'  ,  's5'  , 'error', 'error'],
    /*        s6*/['error','error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error',  's6' ,   's6'  ],
    /*        s7*/['error', 's7'  ,  's8'  , 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error'],
    /*        s8*/['error', 's9'  , 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error'],
    /*        s9*/['error', 's9'  , 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error', 'error'],
]




function reconocerPalabraReservada(palabra) {
    var palabraRes;
    for (var i = 0; i < palabrasReservadas.length; i++) {
        if (palabrasReservadas[i] == palabra) {
            breake;
            palabraRes = 21;
        } else {
            palabraRes = 0;
        }
    }
    return palabraRes;
}

function reconocerBooleano(palabra) {
    var esBooleano;
    for (var i = 0; i < booleanos.length; i++) {
        if (booleanos[i] == palabra) {
            esBooleano = 22;
            breake;
        } else {
            esBooleano = 0;
        }
    }
    return esBooleano;
}
function reconocerOperadores(char) {
    var esOperador;
    for (var i = 0; i < operadores.length; i++) {
        if (operadores[i] == char) {
            esOperador = i + 2;
            return esOperador;
        } else {
            esOperador = 100;
        }
    }
    return esOperador;
}
function reconocerLetra(char) {
    if ((char) => {
        let ascii = caracter.toUpperCase().charCodeAt(0);
        return ascii > 64 && ascii < 91;
    }) {
        return 0;
    } else {
        return 100;
    }
}

function reconocerSimboolo(char) {
    var pos;
    for (var i = 0; i < signos.length; i++) {
        if (char == Simbolos[i]) {
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
    if (!isNaN(char)) {
        return 1;
    } else {
        return 100;
    }
}

function reconocerEstadosPrimeros(palabra) {
    if (reconocerPalabraReservada(palabra) != 0) {
        return 's1';
    } else if (reconocerBooleano(palabra) != 0) {
        return 's2';
    } else {
        return INICIO;
    }
}
function reconcerEstados(char, estActual) {
    if (reconocerLetra(char) != 0) {
        return 's3';
    } else if (reconocerNumero(char) != 0) {

        return reconocerNumero(char);

    } else if (reconocerAgrupadores(char) != 0) {

        return reconocerAgrupadores(char);

    } else if (reconocerOperadores(char) != 0) {

        return reconocerOperadores(char);

    } else if (reconocerSimboolo(char) != 0) {

        return reconocerSimboolo(char);

    } else {
        return 100
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
var INICIO = s0;
var actual;

function analizadorLexico(palabra) {
    cadenaRechazada = false;
    miPalabra = String(palabra);
    var posicion = 0;
    if (reconocerEstadosPrimeros(palabra) == INICIO) {
        while (!cadenaRechazada || posicion < miPalabra.length) {
            var char = miPalabra.charAt(posicion);
            console.log(char);
            switch (actual) {
                case Estado = INICIO:
                    actual = reconocerEstados(char)
                    actual = Estado;
                    break;
                case Estado = 's3':
                    if (tablaDeSimbolos[0][reconocerEstados(char)] != 'error') {
                        actual = tablaDeSimbolos[0][reconocerEstados(char)];
                        actual = Estado;
                    }
                    break;
                case Estado = 's4':
                    if (tablaDeSimbolos[0][reconocerEstados(char)] != 'error') {
                        actual = tablaDeSimbolos[1][reconocerEstados(char)];
                        actual = Estado;
                    }
                    break;
                case Estado = 's5':
                    if (tablaDeSimbolos[0][reconocerEstados(char)] != 'error') {
                        actual = tablaDeSimbolos[2][reconocerEstados(char)];
                        actual = Estado;
                    }
                    break;
                case Estado = 's6':
                    if (tablaDeSimbolos[0][reconocerEstados(char)] != 'error') {
                        actual = tablaDeSimbolos[3][reconocerEstados(char)];
                        actual = Estado;
                    }
                    break;
                case Estado = 's7':
                    if (tablaDeSimbolos[0][reconocerEstados(char)] != 'error') {
                        actual = tablaDeSimbolos[4][reconocerEstados(char)];
                        actual = Estado;
                    }
                    break;
                case Estado = 's8':
                    if (tablaDeSimbolos[0][reconocerEstados(char)] != 'error') {
                        actual = tablaDeSimbolos[5][reconocerEstados(char)];
                        actual = Estado;
                    }
                    break;
                case Estado = 's9':
                    if (tablaDeSimbolos[0][reconocerEstados(char)] != 'error') {
                        actual = tablaDeSimbolos[6][reconocerEstados(char)];
                        actual = Estado;
                    }
                    break;
                case Estado = 'error':
                        cadenaRechazada = true;
                    break;
            }
        }
    } else {
        Estado = reconocerEstadosPrimeros(palabra);
    }

    return Estado;
}


function NombrarEstados(estadoFinal){
    if(estadoFinal = 's1'){
        return 'Palabra Reservada'
    }else if(estadoFinal=='s2'){
        return 'Boolean';
    }else if(estadoFinal=='s3'){
        return 'Identificador'
    }else if(estadoFinal=='s4'){
        return 'Operador'
    }else if(estadoFinal=='s5'){
        return 'Agrupador'
    }else if(estadoFinal=='s6'){
        return 'Signo'
    }else if(estadoFinal=='s7'){
        return 'Entero'
    }else if(estadoFinal=='s8'){
        return 'Error'
    }else if(estadoFinal=='s9'){
        return 'Float'
    }else if(estadoFinal=='s0'){
        return 'Error'
    }
}

var automata = function automataCompleto(palabra){
    NombrarEstados(analizadorLexico(palabra));
}

module.exports = automata ;


