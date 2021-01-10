// Promises

    const usuarioAutenticado = new Promise((resolve, reject) => {
        const auth = true;
        if (auth) {
            resolve('Usuario autenticado');  //El promise se cumple
        } else {
            reject('No se pudo iniciar sesion');  //El promise no se cumple
        }

    });

    console.log( usuarioAutenticado);

    //En los promises existen tres valores posibles

    //Pending: no se cumplio ni se rechazo esta en espera

    // fulfilled: el promise ya se cumplio

    //rejected: El promise no se cmplio fue rechazado

    //Acceder a los valores del promise

    usuarioAutenticado
    .then( function(resultado){
        console.log(resultado)
    })

    .catch(error => console.log(error))