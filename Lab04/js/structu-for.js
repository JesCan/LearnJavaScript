/*
La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de las variables que se utilizan en la condición".

La "inicialización" es la zona en la que se establece los valores iniciales de las variables que controlan la repetición.
La "condición" es el único elemento que decide si continua o se detiene la repetición.
La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición.
*/

//Repetir un mensaje determinado 5 veces
var mensaje = 'Saludos desde Cañete...';
for (var i = 0; i <= 5; i++){
    console.log(mensaje);
};

//Imprimir hasta un determinado número
var numero = prompt('Ingrese un número: ');
for (var a = 1; a <= numero; a++ ){
    console.log(a);
};

//Imprimir los días de la semana
var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
for (i = 0; i < 7; i++){
    console.log(diasSemana[i]);
};

