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