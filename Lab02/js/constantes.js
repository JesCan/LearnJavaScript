/* el valor de una constante no puede cambiarse a través de la reasignación. Las constantes no se pueden redeclarar. */

//Declarando constante el valor del igv
const igv = 0.18;

//Declarando variable para realizar el cálculo
total = 100 * igv;

//Imprimiendo el total
console.log(total);


//Declarando constante de números de días de la semana
const numDiasSemana = 7;

//Imprimiendo constante
console.log('Los días de la semana son: ' + numDiasSemana);

//Declarando IGV y porcentaje de descuento
const impuesto = 0.18;
const dscto = 0.05;
var importe = 500;
var total = importe * impuesto;
var mntDscto = importe * dscto;

//Imprimiendo valores de resultado
console.log('El importe total es: ' + total);
console.log('Pero aplicando el descuento el monto es: ' + mntDscto);
