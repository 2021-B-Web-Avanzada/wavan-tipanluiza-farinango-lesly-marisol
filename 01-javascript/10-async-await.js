//10-async-await.js

const promesaLeerArchivo = () =>{
    return new Promise(
        (res, rej) =>{
            res('CONTENIDO LEER ARCHIVO');
        }
    );
}

const promesaEscribirArchivo = () =>{
    return new Promise(
        (res, rej) =>{
            res('CONTENIDO ESCRIBIR ARCHIVO');
        }
    );
}

//ASYNC AWAIT
//1) Metodos de clases
//2) Funcion
//ESTO NO ES POSIBLE
//PORQUE NO ESTA DENTRO DE UNA FUNCION
//const respuesta = await promesaEscribirArchivo;
//Al momento de usar la palabra ASYNC, esa funcion se convierte
//en una PROMESA
const ejemplo1 = async function (){}
const ejemplo2 = async () => {}
async function ejercicio(){
    console.log('1');
    let nuevoContenido = '';
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');

    }catch (error) {
        console.log(error);
    // throw new Error();
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}
ejercicio()  .then(
    (data) =>{
        console.log('ESTA ES LA RESPUESTA DEL ASYNC AWAIT', data);
    }
)  .catch()  .finally();