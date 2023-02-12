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


//Acceder a propiedades: Variables.
var resultados = {
    1: 'nora256', 
    2: 'gino577',
    3: 'estef543',
    4: 'kiara566'
};

var posicion = 2;

console.log(resultados[posicion]);


//actualizar variables.

var mochila = {
    'color': 'azul',
    'tamaño': 'mediano',
    'contenido': ['botella de agua', 'cuaderno']
};
console.log(mochila.color); // azul

mochila.color = 'verde'; //actualizar valor
console.log(mochila.color);

console.log(mochila.contenido);

mochila.contenido.push('lapiz') //push nos permite agregar um elemento al final del arreglo
console.log(mochila.contenido);

mochila.contenido = ['nuevo contenido'];
console.log(mochila.contenido)