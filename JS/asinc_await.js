// Async/Await
//Continua otras tareas mas cortas mientras realiza una tarea larga

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando nuevos clientes... Espere por favor..');

        setTimeout(() => {
            resolve('Los clientes fueron descargados exitosamente');
        }, 5000);
    });
}

/*
async function app() {
    try {
        const clientes = await descargarNuevosClientes();
        console.log(clientes);
        console.log('Este codigo si espera')
    } catch (error) {
        console.log(error);
    }
} */

app();

console.log('Este codigo se ejecuta mientras esperamos')


//Trabajar con dos consultas async await

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando Ultimos Pedidos... Espere por favor..');

        setTimeout(() => {
            resolve('Los Pedidos fueron descargados exitosamente');
        }, 5000);
    });
}

async function app() {
    try {
        const clientes = await descargarNuevosClientes();
        console.log(clientes);
        console.log('Este codigo si espera')
        const pedidos = await descargarUltimosPedidos();
        console.log(pedidos)

    } catch (error) {
        console.log(error);
    }
}

async function app() {
    try {

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);

    } catch (error) {
        console.log(error);
    }
}