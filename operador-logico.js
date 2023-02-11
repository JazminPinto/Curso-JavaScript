/*
    Tabla de verdad del operador AND (&&)
    Para: X && Y
    | X | Y | X && Y |
    ------------------
    | T | T |   T    |
    | T | F |   F    |
    | F | T |   F    |
    | F | F |   F    |
    La expresion solo es verdadera cuando ambos operandos son verdaderos.
*/

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

var a = 8;

// (a > 5) && (a < 10) --> true && true --> true
console.log((a > 5) && (a < 10));

var a = 3;

// (a > 5) && (a < 10) --> false && true --> false
console.log((a > 5) && (a < 10));

var a = 15;

// (a > 5) && (a < 10) --> true && false --> false
console.log((a > 5) && (a < 10));

var a = 1;

// (a > 5) && (a < 10) --> false && false --> false
console.log((a > 5) && (a == 3));


/*
    Tabla de verdad del operador OR (||)
    Para: X || Y
    | X | Y | X || Y |
    ------------------
    | T | T |   T    |
    | T | F |   T    |
    | F | T |   T    |
    | F | F |   F    |
    La expresion es verdadera si alguno de los dos operandos o ambs son verdaderos.
*/

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var a = 8;

// (a < 5) || (a > 15) --> false || false --> false
console.log((a < 5) || (a > 15));

var a = 2;

// (a < 5) || (a > 15) --> true || false --> true
console.log((a < 5) || (a > 15));

var a = 20;

// (a < 5) || (a > 15) --> false || true --> true
console.log((a < 5) || (a > 15));

var a = 5;

// (a < 5) || (a > 15) --> true || true --> true
console.log((a == 5) || (a < 15));



/*
    Tabla de verdad del operador NOT 
    Para: !X
    | X | !X |
    ----------
    | T |  F |
    | F |  T |
*/

console.log(!true); //false
console.log(!false); // true

var a = 8;

// !(a > 5) --> !true --> false
console.log(!(a > 5));

// !(a < 5) --> !false --> true
console.log(!(a < 5))

var estacion = 'invierno'

if (estacion == 'invierno'){
    console.log('Si, me encanta el invierno')
}

var estacion = 'verano'

if (estacion == 'invierno'){
    console.log('Si, me encanta el invierno')
}
console.log('despues del condicional...')



if(true){
    console.log('la condicion del ejemplo es verdadera');
} else{
    console.log('la condicion es falsa');
}

if(false){
    console.log('la condicion es verdadera');
} else{
    console.log('la condicion del ejemplo es falsa');
}

var x = 5 ;

if(x < 2){
    console.log('la condicion es verdadera');
} else{
    console.log('la condicion es falsa');
}


var estacion = 'invierno';

if(estacion === 'verano'){
    console.log('Comenzo el verano, ya podemos ir a la playa');
} else{
    console.log('Ya quiero que llegue el verano para poder ir a la playa');
}


function classificarValor(valor) {
    if (valor % 2 == 0 ) {
        console.log('Divisible entre 2.');
    } else if(valor % 3 == 0){
        console.log('Divisible entre 3.')
    } else {
        console.log('No es divisible entre las opciones');
    }
}

classificarValor(2);
classificarValor(15);
classificarValor(7);


function clasificarValor(valor){
    if(valor < 5){
        console.log('Menor que 5.')
    } else if (valor < 10){
        console.log('Menor que 10.');
    } else {
        console.log('Mayor o igual a 10')
    }
}

clasificarValor(2);
clasificarValor(7);
clasificarValor(15);

