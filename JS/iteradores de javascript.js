// Iteradores de javascript

//Array 
let pendientes = ['tarea', 'comer', 'proyecto', 'estudiar javascript'];

//Array con objetos

let carrito2 = [
    {id: 1, producto: 'Plato'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Libro'},
    {id: 4, producto: 'Vaso'}
];

//Objeto

let automovil = {
    Modelo: 'camaro',
    Motor: 6.0
}

// For of

for(pendiente of pendientes) {
    console.log(pendiente);
}

for(producto of carrito2) {
    console.log(producto.producto);
}

for(info of Object.values(automovil)) {
    console.log(info);
}

// for each 

pendientes.forEach(tareaPendiente => {
    console.log(`Tengo pendiente ${tareaPendiente}`);
})

carrito2.forEach(producto => {
    console.log(`Usted llevara ${producto.producto}`);
})

Object.values(automovil).forEach( info => {
    console.log(`El veihiculo es un ${info}`);
})



// el map funciona como el foreach pero crea una copia del arreglo y por tanto returna un valor

let pruebaMap = pendientes.map(tareaPendiente => {
    return tareaPendiente;
})

console.log(pruebaMap);