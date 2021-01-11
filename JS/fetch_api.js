// Fetch API


function obtenerEmpleados() {

    const archivo = 'JS/empleados.json';

    fetch(archivo)
        .then(resultado => resultado.json())

        .then(datos => {
            // console.log(datos)


            //console.log(datos.empleados); (una forma de acceder a los datos)

            //con object destructuring:
            const { empleados } = datos;
            console.log(empleados);
        })

}

obtenerEmpleados();