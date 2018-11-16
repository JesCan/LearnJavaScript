//Limpiar pantalla
console.clear();

//Declarando variables
var n = 1;
var numeros = 0;
var datos = 0;
var suma = 0;

//Definiendo la cantidad de números a ingresar
var numeros = prompt('Determinar cantidad de número a ingresar:');
while (n <= numeros) {
    var datos = prompt('Dale, empieza a ingresar los números:');
    console.log('valor (' + n + '): ' + ' ' + datos );
    n = n + 1;
    //var suma = 0;
    //console.log(datos);
    datos = Number.parseInt(datos) ;
    var suma = suma + datos
    
};
console.log('La suma de los números ingresados es: ' + suma);





/* var num = prompt('Ingrese la cantidad de datos a ingresar: ')
for (var i = 1; i <= num; i++) {
    var dato = prompt('Ingrese ahora: ');
    console.log(i);
    for(var a = 0; a<= dato; a++){
        var dato = i;
    };
}; */
//var numeros = [2,8,7,41,25,14,89];
//console.log(numeros);