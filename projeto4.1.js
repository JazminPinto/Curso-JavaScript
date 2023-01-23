var a;
var b;

a = 5;
b = 5;

console.log(a == b); //operador de igualdad -- true
console.log (a === b); //operador igualdad estricta --true

b = 8 ;

console.log(a == b); //false
console.log(a === b); //false

b = '5';

console.log(a == b); //true
console.log(a === b); //false

a = 'JavaScrip';
b = 'JavaScrip';

console.log(a == b); //true
console.log(a === b); //true

console.log(9 != 6); //true (!= distinto) 
console.log(9 != 9); //false
console.log('JavaScript' != 'JavaScript'); //false

console.log([1, 2, 3] != [1, 2, 3]); //true


console.log(1 != '1'); //false (desigualdad = dato comun)

console.log(1 !== '1'); //true (desigualdad estricta = dato no comun)


console.log(6 > 5); //true
console.log(3 > 10); //false

console.log('B' > 'A'); //true
console.log("ACB" > "ABC"); //true

console.log('AB' > 'A'); //true

console.log("Mundo" > 'Hola'); //true

var a = 15;
var b = 17;

console.log(a > b); //true
console.log(b > a); //false

console.log(5 > 5); //false
console.log(5 >= 5); //true
