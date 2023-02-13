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


//agregar propiedades
var curso = {
    'titulo': 'Aprende JavaScript desde cero',
    'idioma': 'Español',
    'duracion': 30
};

curso.vistas = 34500, //para agregar propiedades
console.log(curso.vistas)

console.log(curso);

//tambien se puede crear utilizando corchetes.

curso['vistas'] = 34501;
console.log(curso.vistas);


//Eliminar propiedades
var curso = {
    'titulo': 'Aprende JavaScript desde cero sin dificultad',
    'idioma': 'Español y Portugues',
    'duracion': 45
};
console.log(curso);

delete curso.duracion;
console.log(curso);


//Objetos para busquedas

function buscarElementoQuimico(simbolo){
    var elementoQuimico = '';
    switch (simbolo){
        case 'Al':
            elementoQuimico = 'Aluminio';
            break;
        case 'S':
            elementoQuimico = 'Azufre';
            break;        
        case 'Cl':
            elementoQuimico = 'Cloro';
            break;        
        case 'He':
            elementoQuimico = 'Helio';
            break;        
        case 'B':
            elementoQuimico = 'Boro';
            break;   
        case 'Li':
            elementoQuimico = 'Litio';
            break;    
    }
    return elementoQuimico;
}
console.log(buscarElementoQuimico('Al'));
console.log(buscarElementoQuimico('S'));
console.log(buscarElementoQuimico('Cl'));
console.log(buscarElementoQuimico('He'));
console.log(buscarElementoQuimico('B'));
console.log(buscarElementoQuimico('Li'));

//o, para escribir un codigo mas consigo o mas corto con el mismo resultado

function buscarElementoQuimico(simbolo){
var simbolosQuimicos = {
    'Al': 'Aluminio',
    'S': 'Azufre',
    'Cl': 'Cloro',
    'He': 'Helio',
    'B': 'Boro',
    'Li': 'Litio'
    };
    return simbolosQuimicos[simbolo];
}
console.log(buscarElementoQuimico('Al'));
console.log(buscarElementoQuimico('S'));
console.log(buscarElementoQuimico('Cl'));
console.log(buscarElementoQuimico('He'));
console.log(buscarElementoQuimico('B'));
console.log(buscarElementoQuimico('Li'));


//Verificar propiedades
var miCuaderno = {
    'color': 'verde',
    'categoria': 3,
    'precio': 4.56
};

console.log(miCuaderno.hasOwnProperty('color')); //metodo hasOwnProperty (tiene esta propiedad) es muy util cuando se trabaja con condicionales
console.log(miCuaderno.hasOwnProperty('origen'))


function verificarPropiedad(obj, propiedad) {
    if(obj.hasOwnProperty(propiedad)){
        return'Propiedad: ' + obj[propiedad];
    } else {
        return 'El objeto no tiene esta propiedad.';
    }
}

var miCuaderno = {
    'color': 'verde',
    'categoria': 3,
    'precio': 4.56
};

console.log(verificarPropiedad(miCuaderno, 'color'))
console.log(verificarPropiedad(miCuaderno, 'origen'))


//Objetos Complejos
var ordenesDePizzas = [
    {
        'tipo': 'Margarita',
        'tamaño': 'indiviual',
        'precio': 5.67,
        'toppings': [
            'extra queso',
            'champiõnes',
            'piña'
        ],
        'paraLlevar': true
    },
    {
        'tipo': 'Cuatro Quesos',
        'tamaño': 'familiar',
        'precio': 18.34,
        'toppings': [
            'extra queso',
            'pimenton'
        ],
        'paraLlevar': false
    },
    {
        'tipo': 'Napolitana',
        'tamaño': 'invidual',
        'precio': 6.78,
        'topping':[],
        'paraLlevar': true
    }
];

console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0]['tipo']);
console.log(ordenesDePizzas[1].tipo);
console.log(ordenesDePizzas[1]['tipo']);
console.log(ordenesDePizzas[2].tipo);
console.log(ordenesDePizzas[2]['tipo']);


//Objetos Anidados.
var miReceta = {
    'descripcion': 'mi postre favorito',
    'costo': 15.6,
    'ingredientes': {
        'masa': {
            'harina': '100 grs',
            'sal': '1 cucharaduta',
            'agua': '1 taza'
        },
        'cobertura': {
            'azucar': '120 grs',
            'chocolate': '4 cucharadas',
            'mantequilla': '200 grs'
        }
    }
};
console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);

console.log(miReceta.ingredientes.masa);
console.log(miReceta.ingredientes.masa.harina + ' con punto');
console.log(miReceta.ingredientes.masa['harina'] + ' con corchete');
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

console.log(miReceta.ingredientes.cobertura);
console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla + ' con punto');
console.log(miReceta.ingredientes.cobertura['mantequilla'] + ' con corchete');


