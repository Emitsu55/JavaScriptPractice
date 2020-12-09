// fechas en javascript

const fechaDeHoy = new Date(); //Frmato de new dat = mes-dia-año

console.log(fechaDeHoy);

const mesActual = fechaDeHoy.getMonth() + 1; //Retorna numero del mes empezando de 0 (enero = 0)
console.log(mesActual);

const diaActualSemana = fechaDeHoy.getDay(); //Retorna el numero de dia de la semana arrancando en 0
console.log(diaActualSemana);

const diaActualMes = fechaDeHoy.getDate(); //Retorna el dia del mes
console.log(diaActualMes);

const añoActual = fechaDeHoy.getFullYear(); //Retorna año actual si previamente se usa .setFullYear(*año*) se reescribe el valor del año
console.log(añoActual);

const minutosActuales = fechaDeHoy.getMinutes(); //Retorna minutos
console.log(minutosActuales);

const naceEmitsu = new Date('8-20-1993');
console.log(naceEmitsu);