const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise ( //Definicion de la Promesa
        (resolve, reject) =>{
            if (numero % 2 == 0){
                resolve(numero); //return numero --> resolve(): return undefined
            }else{
                reject('No es par =('); //throw: no es par
            }
        }
    );
    return miPrimerPromesa;
}

function promesaElevarAlCuadrado(numero){
    const miPrimerPromesa = new Promise(
        (resolve, reject) =>{
            const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa; //return numeroElevadoAlCuadrado
}

promesaEsPar(3)
    .then(          //ACEPTAN UN RETURN DE PROMESAS
    (datosPromesa) =>{
        console.log(datosPromesa);
        return promesaElevarAlCuadrado(datosPromesa);
    }
    )   //try
    .then(
        (datosElevarAlCuadrado) =>{
            console.log(datosElevarAlCuadrado);
        }
    )
.catch(
    (error)=>{
        console.log(error);
    }
)  //catch
.finally() //Finally

