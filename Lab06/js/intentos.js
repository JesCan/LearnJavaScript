var clave = 'eureka';

for (var i = 1; i <= 3; i++) {
    var ing = prompt('Intento Nº '+ i +': Ingrese la clave ');
    if (clave == ing) {
        console.clear();
        console.log('password correcto, intento número ' + i);
        i=3;
    }
    else {
        console.clear();
        console.log('password incorrecto, intento número ' + i);
    }
};
