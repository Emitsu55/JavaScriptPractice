// Destrucuring, la forma de la que se extraen valores de un objeto 

let cliente = {
    Nombre: 'Alejandra',
    Membresia: 'Premium',
    Datos: {
        Ubicacion: {
            Pais: 'Argentina',
            Provincia: 'Bs. As.'
        },
        FechaNac: {
            Año: 1987,
            Mes: 12,
            Dia: 29
        }
    }
}

console.log(cliente);

//una forma de obtener por ejem,plo el nombre de el cliente seria 

let nombreCliente = cliente.Nombre;
console.log(nombreCliente);

// con destructuring sera:

let {Nombre, Membresia} = cliente;
let {Datos: {Ubicacion}, Datos: {Ubicacion : {Pais}}} = cliente;

console.log(Nombre, Membresia, Ubicacion, Pais);


// Object literal enhancement sirve para unir datos en un objeto

let banda2 = 'Blonde Redhead',
    genero = 'Rock',
    canciones = ['Girl Boy', 'Top Ranking', 'Violent Life'];

//Forma anteriror de hacerlo

// let blondeRedhead = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }

//Nueva forma

let blondeRedhead = {banda, genero, canciones}

console.log(blondeRedhead);