var a;
var b;

a = 5;
b = 5;

console.log(a == b); //operador de igualdad -- true
console.log (a === b); //operador igualdad estricta --true

b = 8 ;

console.log(a == b); //false
console.log(a === b); //falso

b = '5';

console.log(a == b); //true
console.log(a === b); //false

a = 'JavaScrip';
b = 'JavaScrip';

console.log(a == b); //true
console.log(a === b); //true