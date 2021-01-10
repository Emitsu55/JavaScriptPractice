// Try catch se utiliza en casos muy especificos donde necesitas que el codigo se siga ejecutando a pesar de haber un error
const numUno = 20;
const numTres = 30;

console.log(numUno);

try {
    console.log(numDos);
} catch (error) {
  console.log(error);  
}

console.log(numTres);