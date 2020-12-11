let gente = [
    {nombre: 'Emiliano', edad: 27},
    {nombre: 'Laura', edad: 22},
    {nombre: 'Maria', edad: 24},
    {nombre: 'Walter', edad: 25},
    {nombre: 'José', edad: 12},
    {nombre: 'Pablo', edad: 80}
]

console.table(gente);

// Obtener personas mayores de 25 años (filter)

let mayores25 = gente.filter(individuo => individuo.edad > 25);

console.log(mayores25);

// Extraer una persona (find)

let datosWalter = gente.find( individuo => individuo.nombre === 'Walter');

console.log(datosWalter);

//Reduce

let total = gente.reduce((edadTotal, individuo) => {
    return edadTotal + individuo.edad
}, 0);  // el 0 es numero inicial

console.log(`La edad total es ${total}`);