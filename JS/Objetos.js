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