// Arrays

const arrayNumeros = [0, 1, 2, 3, 4, 5];

console.table(arrayNumeros);

const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(arrayMeses[7]);

const arrayLoco = [10, 'Hola', true, false, undefined, null];
console.table(arrayLoco);
console.log(arrayLoco.length); //Cuantos Elementos tiene un arreglo 
console.log(Array.isArray(arrayLoco));

//agregar elemento a un array

arrayMeses[15] = 'Pedo'; //Agrega en la posicion indicada
console.table(arrayMeses);

arrayMeses.push('Mes Falso'); //Push lo agrega al final siempre
arrayMeses.unshift('Inicio Meses'); //Agrega al inicio

console.table(arrayMeses);

arrayMeses.pop(); //Elimina el ultimo 
arrayMeses.shift(); //Elimina el primero 
arrayMeses.splice(14,16); //Elimina todos desde el primer parametro hasta el segundo
console.table(arrayMeses); 

// Oredenar un array 

let frutas = ['Banana', 'Manzana', 'Naranja', 'Pera', 'Frambueza'];

frutas.sort(); //Ordena alfabeticamente un array
console.table(frutas);

