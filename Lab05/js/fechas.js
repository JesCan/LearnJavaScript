//Desarrollo de ejercicio 8
var ingFecha = prompt('Ingrese la fecha en formato MM/DD/YYYY: ');
var importe = prompt('Ingrese importe de venta:')
var fecha = new Date(ingFecha);
var nomMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre','Noviembre', 'Diciembre']
//console.log(fecha);
//console.log('La venta se hizo en el mes de ' + nomMes[fecha.getMonth()]);

if (nomMes[fecha.getMonth()] == 'Octubre') {
    //console.log(nomMes[fecha.getMonth()]);
    var total = importe - (importe * 0.25)
    console.log('La venta se hizo en el mes de octubre');
    console.log('El importe de venta es: ' + importe);
    console.log('Menos el descuento, el total a pagar es: ' + total);
}
else{
    console.log('La venta no se hizo en octubre, se realizó en el mes de '+ nomMes[fecha.getMonth()] );
    console.log('No hay descuento');
}


