/*var miPerro = {
    'nombre': 'Gino',
    'edad': 5,
    'peso': 6,
    'raza': "Beagle"
};

var miObjeto = {
    5:'cinco'
};
*/

//Acceder a propiedades: Notacion de punto.

var miPerro = {
    'nombre': 'Gino',
    'edad': 5,
    'peso': 6,
    'raza': "Beagle"
};  

console.log('Mi perro se llama ' + miPerro.nombre);
console.log(miPerro.edad + ' meses de edad');
console.log(miPerro.peso + ' kilos');
console.log(miPerro.raza);


//Acceder a propiedades: Notacion de corchetes.
var miCuaderno = {
    'color': 'verde',
    'categoria': 3,
    'numeroDePaginas': 200,
    'numero de paginas': 200,
    'numeroDeHojas': 100,
    'numero de hojas': 100
};
console.log(miCuaderno.color);
console.log(miCuaderno['color']);
console.log(miCuaderno.categoria);
console.log(miCuaderno['categoria']);
console.log(miCuaderno.numeroDePaginas);
console.log(miCuaderno['numero de paginas']);
console.log(miCuaderno.numeroDeHojas);
console.log(miCuaderno['numero de hojas']);


