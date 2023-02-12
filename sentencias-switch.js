function clasificarValor(valor){
    var respuesta;
    switch(valor){
        case 1: //(si case es correto se ejecuta la siguiente linea q seria la respuesta y luego se ejecuta la siguiente)
            respuesta = 'alpha';
            break; //(cuando se ejecute esta linea se va a para el proceso, se interrumpe el proceso y el resto de los caso no se van a ejecutar, es como una pausa)
        case 2:
            respuesta = 'beta';
            break;
        case 3:
            respuesta = 'gamma';
            break;
        case 4:
            respuesta = 'delta';
            break;
    }
    return respuesta;
}
console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));


var producto = 'hamburguesa';
switch(producto){
    case 'pizza':
        console.log('la pizza basica cuesta $10.55');
        break;
    case 'hamburguesa':
        console.log('las hamburguesas cuestan $6.78');
        break;
    case 'helado':
        console.log('el helado cuesta $2.8');
        break;
}

var producto = 'pizza';
switch(producto){
    case 'pizza':
        console.log('la pizza basica cuesta $10.55');
        break;
    case 'hamburguesa':
        console.log('las hamburguesas cuestan $6.78');
        break;
    case 'helado':
        console.log('el helado cuesta $2.8');
        break;
}
var producto = 'helado';
switch(producto){
    case 'pizza':
        console.log('la pizza basica cuesta $10.55');
        break;
    case 'hamburguesa':
        console.log('las hamburguesas cuestan $6.78');
        break;
    case 'helado':
        console.log('el helado cuesta $2.8');
        break;
}
console.log('luego de switch')


function seleccionarIdioma(valor){
    var idioma;
    switch(valor){
        case 1:
            idioma = 'Español';
            break;
        case 2:
            idioma = 'Frances';
            break;
        case 3:
            idioma = 'Italiano';
            break;
        default: //(por defecto)
            idioma ='Ingles';
            break; //(colocarlo es opcional)
    }
    return idioma;
}
console.log(seleccionarIdioma(1));
console.log(seleccionarIdioma(2));
console.log(seleccionarIdioma(3));
console.log(seleccionarIdioma(4));


function clasificarVolumen(valor){
    var volumen;
    switch (valor){
        case 1:
            volumen = 'bajo';
            break;
        case 2:
        case 3:
            volumen = 'intermedio';
            break;
        case 4:
        case 5:
        case 6:
            volumen = 'alto';
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(1));
console.log(clasificarVolumen(2));
console.log(clasificarVolumen(3));
console.log(clasificarVolumen(4));
console.log(clasificarVolumen(5));
console.log(clasificarVolumen(6));


function seleccionarIdiomas(valor) {
    var idiomas;

    if (valor == 1) {
        idiomas = 'español';
    } else if (valor == 2){
        idiomas = 'frances';
    } else if (valor == 3){
        idiomas = 'italiano';
    } else {
        idiomas = 'ingles';
    }
    return idiomas;
}
console.log(seleccionarIdiomas(1));
console.log(seleccionarIdiomas(2));
console.log(seleccionarIdiomas(3));

//se puede reemplazar el if, else if e else por switch, case, default e break, para obtener el mismo resultado

function seleccionarIdiomas(valor) {
    var idiomas;

    switch (valor){
        case  1:
            idiomas = 'español';
            break;
        case 2:
            idiomas = 'frances';
            break;
        case 3:
            idiomas = 'italiano';
            break;
        default:
            idiomas = 'ingles';
            break;
    }
        return idiomas;    
}
console.log(seleccionarIdiomas(1));
console.log(seleccionarIdiomas(2));
console.log(seleccionarIdiomas(3));

