console.log('-----------Aca empiesa el archivo JS--------------');
console.log('Funciona bien');

// Formas de crear variables en JavaScript//

// variable tipo nombrePersona es conocido como 'Camelcase'
// Variable tipo nombre_persona es conocida como 'underscore'
// Variable tipo NombrePersona es conocida como 'Pascalcase'

var variable1; //la define pero sin ningun valor//
console.log(variable1);

var variable1 = 'Variable creada con "var"';
console.log(variable1);

variable1 = true; //Se puede sobrescribir una variable con cualquier valor//
console.log(variable1);

let variable2; //let no permite volver a declarar una variable

variable2 = 'Variable creada con "Let"';

const variable3 = 'Variable creada con "Const"'; //Siempre requieren un valor inicial y no se pueden reescribir

const divMensaje = document.getElementById('mensaje');

// Concatenar variables
console.clear()

let aprendiendo = 'aprendiendo',
    tecnologia = 'JavaScrip';

console.log(aprendiendo + ' ' + tecnologia);

console.log(`${aprendiendo} ${tecnologia}`);

// Funciones para strings

let banda = 'Blonde Redhead',
    cancion = 'Girl Boy';

let musica;

musica = banda + ': ' + cancion;

console.log(musica);

// Ver largo de String
console.log(musica.length);

// Concatenar

let musicaFav = musica.concat(" ", "amo ese tema");
console.log(musicaFav);

// Pasar a mayusculas

musica = musica.toUpperCase();
console.log(musica);

// Minusculas 

// musica = musica.toLowerCase();
// console.log(musica);

// Dividir cadena de Texto 

let actividad = 'Estoy aprendiendo JavaScript';

let actividadDividida = actividad.split(' ');

console.log(actividadDividida);

let intereses = 'programar, explorar, jugar videojuegos, dibujar';
let listaIntereses = intereses.split(', ');
console.log(listaIntereses);

// reemplazar valor 
intereses = intereses.replace('explorar', 'explorar bosques');
console.log(listaIntereses);

// Revisar que algo exista 

let var1;
var1 = intereses.includes('jugar videojuegos');
console.log(var1);

// repetir un comando de texto 

console.log(actividad.repeat(3));

// enteros 
// la clase Math

resultado = Math.round(2.3);

console.log(resultado);

resultado = Math.floor(2.3); //redondea hacia abajo
console.log(resultado);

resultado = Math.ceil(2.3); //redondea hacia arriba
console.log(resultado);

resultado = Math.sqrt(144); //Raiz cuadrada
console.log(resultado);

resultado = Math.abs(-30); //pasa un negativo a valor absoluto
console.log(resultado);

resultado = Math.pow(8, 4); // potencia, en el ej seria 8 a la 4
console.log(resultado);

resultado = Math.min(10, 2, 6, 3, 0, 1); //escoje el minimo numero
console.log(resultado);

resultado = Math.max(7, 434, 255, 238);
console.log(resultado);

// incrementos

resultado++ //incremento en uno (si la variable esta primero, la imprime y luego incrementa, si el incremento esta primero, incrementa y luego imprime)
console.log(resultado);

resultado += 5;
console.log(resultado); //incrementa cantidad especifica   

resultado-- //decrecimiento
console.log(resultado);

// convertir string a numero

let nro1 = 10,
    nro2 = "20",
    nro3 = "5.8"
    nro4 = 32529.3258629;

console.log(Number(nro2) + nro1);

console.log(parseInt(nro2) + nro1); //convierte enteros
console.log(parseFloat(nro2) + nro1); //Convierte numeros con coma

// Covertir un numero a fijo

console.log(nro4.toFixed());
console.log(nro4.toFixed(3));  //tomaria 3 decimales despues de la coma

// convertir numero a String

console.log(nro4.length);
console.log(String(nro4).length); 

// Saber el tipo de un dato 

console.log(typeof nro1);
console.log(typeof nro2);

let datoNulo = null;
let datoIndefinido;
let array = ['gato', 'lobo', 'lagartija'];
let objeto1 = {
    Nombre: 'Emiliano',
    Apellido: 'Muñoz'
}
let fecha = new Date();

console.log(typeof datoNulo); //Los datos del tipo Null son objetos en JavaScript
console.log(typeof(datoIndefinido));
console.log(typeof(array)); //los array en javascript son objetos
console.log(typeof(objeto1));
console.log(typeof(fecha));