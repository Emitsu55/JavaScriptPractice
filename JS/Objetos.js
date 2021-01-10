//Objetos

let individuo = {
    Nombre: 'Emiliano',
    Apellidos: 'Muñoz Chedel',
    Edad: 27,
    Residencia: {
        Pais: 'Argentina',
        Provincia: 'Buenos Aires',
        Localidad: 'Gral. Rodriguez'
    },
    Vive: true,
    Videojuegos: ['Zelda', 'Pokemon', 'Terranigma']
}

console.table(individuo);
console.log(individuo.Apellidos)
console.log(individuo.Videojuegos[2])
console.log(individuo.Residencia.Pais);
console.log(individuo['Residencia'] ['Localidad']); //otra forma de acceder al objeto


//Esta forma de creacion de objetos es llamada object literal
//let individuo = {
//     Nombre: 'Emiliano',
//     Apellidos: 'Muñoz Chedel',
//     Edad: 27,
//     Residencia: {
//         Pais: 'Argentina',
//         Provincia: 'Buenos Aires',
//         Localidad: 'Gral. Rodriguez'
//     },
//     Vive: true,
//     Videojuegos: ['Zelda', 'Pokemon', 'Terranigma']
// }

//Object constructor:

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
    
}

// Creando nuevas tareas

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
console.log(tarea1);

// El object constructor permite crear multiples objetos

const tarea2 = new Tarea('Aprender PHP', 'Urgente');
console.log(tarea2);
const tarea3 = new Tarea('Jugar videojuegos', 'Media');
console.log(tarea3);
const tarea4 = new Tarea('Bañarme', 'Sin urgencia');
console.log(tarea4);

// Para convertir a clase la sintaxis cambia asi:  (nueva forma)

// class Tarea {
//        constructor(nombre, urgencia ){
//             this.nombre = nombre;
//             this.urgencia = urgencia;
//        }
//      }


// uso del 'THIS' en object literal:

let individuo2 = {
    nombre: 'Emiliano',
    apellidos: 'Muñoz Chedel',
    edad: 27,
    residencia: {
        pais: 'Argentina',
        provincia: 'Buenos Aires',
        localidad: 'Gral. Rodriguez'
    },
    vive: true,
    videojuegos: ['Zelda', 'Pokemon', 'Terranigma'],
    anioNac: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log
(individuo2);
console.log(individuo2.anioNac());


// prototypes
// nos permite crear funciones que solo se utiizan en objeto en especifico
//Forma vieja
/*
function Cliente(nombre, id) {
    this.nombre = nombre;
    this.id = id;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}



const producto1 = new Producto('Monitor curvo 48', '500');
const producto3 = new Producto('smartphone', '7000');
const cliente2 = new Cliente('Emitsu', '05');

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un valor de $ ${this.precio}`;
}

Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} tiene el id ${this.id}`;
}
console.log(producto3.formatearProducto);
console.log(cliente2.formatearCliente) */

//forma nueva

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un valor de $ ${this.precio}`;
    }

    precioProducto() {
        return 'El precio es $' + this.precio;
    }
}

const producto1 = new Producto('Monitor curvo 48', '500');
const producto3 = new Producto('smartphone', '7000');

console.log(producto1.formatearProducto());
console.log(producto3.precioProducto())

//herencia - una clase puede heredar propiedade de otra la sintaxis es la siguiente

class Pokemon extends Producto {
    constructor(nombre, precio, tipo) {
        super(nombre, precio);
        this.tipo = tipo;
    }
    formatearProducto(){
        return `El pokemon ${this.nombre} es de tipo ${this.tipo}`;
    }

}

const pokemon1 = new Pokemon('Gengar', 500, 'Fantasma');
const pokemon2 = new Pokemon('Charizard', 500, 'Fuego');


pokemon1.formatearProducto;
console.log(pokemon1.formatearProducto());
console.log(pokemon1);