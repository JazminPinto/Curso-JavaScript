//Numeros aleatorios
function generarFraccionAleatoria() {
    return Math.random(); 
}

console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());

console.log(Math.random())


//Numeros enteros Aleatorios
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

console.log(numeroAleatorioEntre0y19);

function gererarEnteroAleatorio(limiteSuperior) {
    //Generar un entero aleatorio entre 0 y el limite superior (sin incluirlo)
    return Math.floor(Math.random() * limiteSuperior);
}

console.log(gererarEnteroAleatorio(5));
console.log(gererarEnteroAleatorio(5));
console.log(gererarEnteroAleatorio(5));


//Numeros Enteros Aleatorios en un Rango
function rangoAleatorio(limiteInferior, limiteSuperiores) {
    return Math.floor(Math.random() * (limiteSuperiores - limiteInferior + 1)) + limiteInferior;
}
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));


//Funcion parseInt()
console.log(parseInt('5')); //convertir una cadena de caracteres a un entero
console.log(parseInt('-5'));
console.log(parseInt('6.7'));
console.log(parseInt('4.1'));
console.log(parseInt('abc'));


var a = parseInt('5');
var b = parseInt('7');

console.log(a + b);


//Funcion parseInt con una Base
console.log(parseInt('110111', 2));
console.log(parseInt(110111, 2));

console.log(parseInt('3E0A', 16));


//Operador Condicional (Ternario)
function retornarMinimo(x, y) {
    if (x < y) {
        return x;
    } else {
        return y; 
    }
}

//se puede compactar asi 

function retornarMinimo(x, y) {
    console.log (x < y ? x : y);
}

retornarMinimo(4,7);
retornarMinimo(8,2);
retornarMinimo(5,5);

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3);


//Multiples operadores condicionales o ternarios
function compararNumeros(a,b) {
    return a == b ? 'a y b son iguales' 
         : a > b ? 'a es mayor que b'
         : 'b es mayor que a'; 
}
console.log(compararNumeros(15,15));
console.log(compararNumeros(27,11));
console.log(compararNumeros(11,27));


//var vs. let
var campista = 'James';
var campista = 'David'
console.log(campista) //con var se puede sustituir las veces que queramos, de ambito global

let campo = 'Jonas';
//let campo = 'Lola'
console.log(campo) //con let solo se usa una vez, es mas restrictivo


//Ambito de var vs. let
var miVariableGlobal = 4;
console.log(miVariableGlobal);

function miFuncion(){
    console.log(miVariableGlobal);

    var miVariableLocal = 8;
    console.log(miVariableLocal);
}
miFuncion();

console.log(miVariableGlobal);
/* console.log(miVariableLocal); da error*/


for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log('Variable: ' + i);


for (let k = 0; k < 3; k++) {
    console.log('variable: ' + k);
}
//console.log('Variable: ' + k); se puede usar let si no se va a utilizar fuera del ciclo.

var mostrarColor = true;
if (mostrarColor) {
    let color = 'verde';
    console.log('Mi color favorito es: ' + color);
}


//Const
const MI_CONSTANTE = 35;

console.log(MI_CONSTANTE);

// miConstante = 15; no se puede reiniciar el valor asignado al inicio
//escribir const con MAYUSCULA para diferenciar las variables y sabes q esa no debe cambiarse.

function calcularAreaCirculo(radio) {
    const PI = 3.14;

    if (radio < 0) {
        return undefined;
    }
    return PI * (radio ** 2); // ** eleva el valor, como una exponente 

}

console.log(calcularAreaCirculo(10));


//Mutar arreglo declarado con const.
const MI_ARREGLO = [1, 2, 3, 4];

/* MI_ARREGLO = [5, 6, 7, 8] 
va a dar error porque no se le puede asignar un nuevo valor. 
peeero se puede hacer de la siguiente manera.*/

MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;

console.log(MI_ARREGLO)


//Crear un Objeto inmutable
let colores = {
    'verde': '#10e04b',
    'azul': '#1b5050',
    'negro': '#000000',
    'blanco': '#ffffff'
};

Object.freeze(colores);

colores.verde ='#345sg5'; // no da error pero no se puede cambiar, ni adicionar, ni borrar, siempre va a permanecer el primer valor porque se congelo usando freeze,

console.log(colores)



//funcion flechas
const fecha = function(){
    return new Date();
}

// en vez de eso arriba se puede hacer de la siguiente manera
const fecha1 = () => new Date();


//funciones flecha con parametros
const sumarTres = function(x) {
    return x + 3;
};
console.log(sumarTres(4));
//o asi
const sumaRTres = (x) => x + 3;
console.log(sumaRTres(4));


const concatenarArreglos = function(arr1, arr2){
    return arr1.concat(arr2);
}
console.log(concatenarArreglos([1,2], [3,4,5]));

// transformar en funcion flecha
const concatenarARreglos = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarARreglos([1,2], [3,4,5]));

const sumar = function(a, b){
    let num = 6;
    return a + b + num;
};
console.log(sumar(1, 1));
//o asi
const sumaR = (a, b) =>{ 
    let num = 6;
    return a + b + num;
};
console.log(sumaR(1, 1));


//Valores por defectos para parametros
const incrementar =  (num, valor = 1) => num + valor;
console.log(incrementar(5));
console.log(incrementar(5, 3));


//Operador Rest
function miFunciones(...args){
    console.log(args);
}

miFunciones(1);
miFunciones(1, 2);
miFunciones(1, 2, 3, 4);
miFunciones([1, 2, 3], [4, 5, 6]);

function miFunciones(...args){
    console.log(args.length);
}
miFunciones([1, 2, 3], [4, 5, 6]);
miFunciones(1, 2, 3, 4, 5, 6);


const suMar = (...argss) => {
    return argss.reduce((a, b) => a + b, 0); //.reduce() con estos argumentos suma los alementos del areglo y retorna el resultado, pasamos una funcin flecha como argumento
};


//Operador spread
const numerOs = [1, 2, 3];
function sumAr(x, y, z) {
    return x + y + z;
} 
console.log(sumAr(...numerOs));


//Sintaxis de Desestructuracion
const usuario = {
    nombre: 'Gino Smith',
    edad: 34
};
 /*
//anteriormente era asi
const nombre = usuario.nombre;
const edad = usuario.edad;
*/
// ahora
const {nombre, edad} = usuario; 

var coordenadas = {
    X: 4, 
    y: 6,
    z: 12
};

const {X, y, z} = coordenadas;

console.log(X);
console.log(y);
console.log(z); 


//Sintaxis de Desestructuracion: Objetos Anidados
const Usuario = {
    johnDoe: {
        Edad: 27,
        correo: 'johnDoe@freecodecamp.com'
    }
};
const {johnDoe: {Edad, correo}} = Usuario;
console.log(Edad);
console.log(correo);

// o esta tambien sirve

const {johnDoe: {Edad: edadDelUsuario, correo: correoDelUsuario}} = Usuario;
console.log(edadDelUsuario);
console.log(correoDelUsuario);


const PRONOSTICO_LOCAL = {
    'ayer':{
        minima: 61,
        maxima: 75
    },
    'hoy':{
        minima: 64,
        maxima: 77
    }
    ,'mañana':{
        minima: 68,
        maxima: 80
    }
};

/*
const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

console.log(minimaHoy);
console.log(maximaHoy);
//o asi tambien 
console.log(minimaHoy, maximaHoy); //para tener los valores en la misma linea

*/

/*const {hoy: {minima: minimaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy);

const {hoy: {maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(maximaHoy); 

//tambien se puede hacer ambas operaciones en la misma linea
const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;  
console.log(minimaHoy, maximaHoy)
*/


//sintaxis de desestructuracion: arreglos