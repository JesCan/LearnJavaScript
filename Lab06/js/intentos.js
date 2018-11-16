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

/* 
var intento = 1;
var pass = 'eureka';

for (var i = 1; i <= 3; i++) {
var clave = prompt('Ingrese la clave: ');
    if (intento <= 3) {
        
        if (clave = pass) {
            console.log('Clave correcta')
        }
        console.log('Clave incorrecta')
        console.log('Intento número ' + i);
        
        intento = intento + 1;

    }else{
        i++;
        console.log('paso sus intentos');
    }
    
} */