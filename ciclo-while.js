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


//Ciclo For: numeros impares
var miArregloFor = []
    for (var i = 1; i < 20; i += 2){
        miArregloFor.push(i);
    }
    console.log(miArregloFor);


//Ciclos For: Contar hacia atras
for (var i = 15; i >= 10; i--) {
    console.log(i);
}
 // o asi
for (var i = 15; i >= 10; i -= 2) {
    console.log(i);
}


var miArregloForPush = []
for (var i = 10; i = 0; i -= 2) {
    miArregloForPush.push(i);
}

console.log(miArregloForPush);


//Iterar sobre un arreglo con un Ciclo For
var miArregloIterar = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArregloIterar.length; i++) {
    console.log('iteracion ' + i); //se puede usar console.log dentro de un ciclo solo para ver como funciona el ciclo, pero no es necesario
    console.log(miArregloIterar[i]);
    total += miArregloIterar[i];
}
console.log(total);

var lenguajes = ['JavaScript', 'Python', 'Java', 'C++'];
for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}
//toUpperCase es para colocar todas las letras en mayuscula

function contarNumerosPares(arreglito) {
    var total = 0;

    for (var i = 0; i < arreglito.length; i++ ){
        if (arreglito[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}
console.log(contarNumerosPares([5, 3, 1, 2, 4, 6, 8, 9]));


//Ciclos For Anidados
var arreglo1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i <arreglo1.length; i++) {
    console.log('> Nueva iteracion:');
    console.log('Arreglo:');
    var arregloAnidado = arreglo1[i]; //Arreglo

    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log('>>> Ciclo anidado');
        console.log('Elemento:');
        console.log(arregloAnidado[j]); //Elemento
    }
}


//Ciclos 'do...while' ('hacer tal cosa mientras una accion es verdadera)

var x = 16;

do {
    console.log(x);
    x++ //17
} while (x < 10) 

//vai dar o mesmo resultado, mas deve ser usado como en el primer ejemplo

x = 16
while ( x < 10) {
    console.log(x);
    x++;
}

