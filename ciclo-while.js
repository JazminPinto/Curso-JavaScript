//Ciclos *while *for

//While se usa cuando no tenemos un numero especifico de Iteraciones 

var i = 0;

while (i <= 3) {
    console.log('Hola, Mundo');
    i++;
};



var miArreglo = [];
var i = 0;

console.log(miArreglo);

while (i < 10) {
    miArreglo.push(i);
    i++;
}

console.log(miArreglo);


var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
    numeros.pop();
}
console.log(numeros);


//Ciclo for
var miOtroArreglo = [];

for (var i = 0; i < 10; i++) {
    miOtroArreglo.push(i);
}
console.log(miOtroArreglo);

//puede ser asi tambien 

var miOtroArreglo = [];

for (var i = 0; i < 10; i = i + 2) {
    miOtroArreglo.push(i);
}
console.log(miOtroArreglo);
 
//o asi

var miOtroArreglo = [];

for (var i = 0; i < 10; i += 2) {
    miOtroArreglo.push(i);
}
console.log(miOtroArreglo);