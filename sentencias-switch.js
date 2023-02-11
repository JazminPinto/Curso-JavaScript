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

