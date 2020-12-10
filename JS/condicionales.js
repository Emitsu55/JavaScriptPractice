// Condicionales If, Else, else if.

let numeroRandom = Math.round(Math.random(0, 2));

const login = numeroRandom;

let logueado;

if(login === 1) {
    console.log('Usted esta Logueado');
    logueado = true;
} else {
    console.log('Inicie sesion');
    logueado = false;
}

//Operadores ||  &&

let dinero = 500;
let carrito = 450;
let tarjeta = true;

if( dinero >= 500 || tarjeta) {
    console.log('Pago Correcto');
} else {
    console.log('Saldo insuficiente');
}

let tengoTiempo = true;
let tengoDinero = true;

if(tengoTiempo && tengoDinero) {
    console.log('Me voy a la playa');
} else {
    console.log('Me quedo en casa');
}

let hora = fechaDeHoy.getHours();
console.log(hora);

if( hora > 0 && hora <= 12) {
    console.log('Buenos Dias');
} else if(hora <= 18) {
    console.log('Buenas Tardes');
} else if(hora > 18 && hora <= 24) {
    console.log('Buenas Noches');
}

// Ternarios

console.log( logueado ? 'Esta logueado' : 'No esta Logueado');

//Switchs

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Bitcoin':
        console.log(`Pago no valido`);
        break;    
    default:
        console.log('Pago no realizado');
        break;    
}