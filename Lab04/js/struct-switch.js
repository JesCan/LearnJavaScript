/* 
Sintaxis:
var nombre = valor;
switch(valor){
    case 'Option 1':
        instrucciones;
        break;
    case 'Option 2':
        instrucciones;
        break;
    ...
    default: 
        instrucciones;
        break;
}
*/

//Ejemplo 01
var distrito = 'MA';
switch (distrito) {
    case 'SV':
        console.log('San Vicente');
        break;
    case 'IM':
        console.log('Imperial');
        break;
    case 'MA':
        console.log('Mala');
        break;
    default:
        console.log('No se reconoce texto ingresado...')
        break;
}