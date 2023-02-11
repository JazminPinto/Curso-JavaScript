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