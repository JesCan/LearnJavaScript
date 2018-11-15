/*
    La estructura más utilizada en JavaScript y en la mayoría de lenguajes de programación es la estructura if. Se emplea para tomar decisiones en función de una condición. 
    Sintaxis:
    if(condición){
        argumentos...
    }
 */

 //Primer ejemplo:
 var edad = 19;
 if (edad >= 18 ){
     console.log('Mayor de edad');
 }

 //Segundo ejemplo:
 var sexo = 'F';
 if(sexo = 'F'){
     console.log('Femenino')
 }

//Ingrese una nota y determine si es aprobatoria o no
var nota = prompt('Ingrese una nota entre 0 y 20: ');
if (nota <= 12.5){
    console.log('La nota ingresada es: ' + nota)
    console.log('Desaprobado');
}
else{
    console.log('La nota ingresada es: ' + nota);
    console.log('Aprobado');
}

//Determine un mensaje según la nota ingresada: Con la justa, Puedes mejorar, Lo hiciste bien y Excelente... vamos por más
var promedio = prompt('Ingrese el promedio del estudiante entre 0 y 20: ');
if (promedio <= 12.5) {
    alert('Tu promedio es ' + promedio + ', haz desaprobado');    
}
else if (promedio <= 14) {
    alert('Tu promedio es ' + promedio + ', haz aprobado con la justa');
}
else if (promedio <= 16) {
    alert('Tu promedio es ' + promedio + ', Puedes hacerlo mejor');
}
else if (promedio <= 18) {
    alert('Tu promedio es ' + promedio + ', Lo haz hecho bien')
}
else if (promedio <= 20) {
    alert('Tu promedio es ' + promedio + ', Excelente... buen trabajo')
}
else if (promedio >20) {
    alert('El promedio ingresado no es válido.')    
}

