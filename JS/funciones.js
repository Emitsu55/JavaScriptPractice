//funciones

// Declaarar una funcion - Cuando las declaras podes usarlas antes de declararlas

function funcion1() {
    console.log('Mi nombre es Emiliano');

}

// Expresar una funcion - no se pueden usar antes de expresarlas

funcion2 = function() {
    console.log( 1 + 2 );
}

// Llamar una funcion 

funcion1();
funcion2();

// Parametros 

saludar('Emiliano', 'pollito');
saludar('Jose')

//lo que haiga esla forma de pasar un parametro default

function saludar(nombre, comida = 'lo que haiga') {
    console.log('hola ' + nombre + ' queres comer ' + comida );
} 

// IIFI son funciones que se invocan inmediatamente no hay que mandarlas a llamar

// se declaran asi 

let persona = 'Emiliano';

(function(persona) {
    console.log('Hola Mundo soy ' + persona);
})(persona);


//Metodos 

// Se llama metodo cuando una funcion se ejecuta dentro de un objeto


const musica2 = {
    reproducir: function(cancion){
        console.log( `Reproduciendo la canción: ${cancion}`);
    },
    Pausar: function() {
        console.log('Pausado');
    }
}

musica2.reproducir('Top Ranking');
musica2.Pausar();
musica2.reproducir('Falling Man');

//Los metodos también pueden ir por fuera

musica2.borrar = function(id) {
    console.log(`Borrando la cancion ${id}`);
}

musica2.borrar('chi e non e');

    

//Funciones que retornan valores

function suma1(a = 0, b = 0) {
    return a + b;
}

let resultadoSuma = suma1(5, 9);

console.log(resultadoSuma);

function esMayorA10(a) {
    if(resultadoSuma > 10)  {
        return console.log("Es mayor a 10");
     } else {
         return console.log('No es mayor a 10');
     }
}

esMayorA10(resultadoSuma);

// arrow function

// const suma1 = (a = 0, b = 0) => {
//     return a + b;
// }  E las arrow function si hay solo un parametros se le puede quitar el parentesis al mismo

// Tambien se puede quitar la llave si solo retorna un valor:

const multiplicar = a => a * 5;
let resultadoMultip = multiplicar(5);
console.log(resultadoMultip);