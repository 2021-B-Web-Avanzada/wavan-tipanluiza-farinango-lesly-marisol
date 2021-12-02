// 09-ejercicio-lec-esc-promesas.js
const fs = require('fs');
    function promesaLeerArchivo(path) {
        const miPrimerPromesa = new Promise( //Definicion de la Promesa
            (resolve, reject) => {
                fs.readFile(
                    path,
                    'utf-8',
                    (error, contenido) => {
                        if (error) {
                            reject('error leyendo contenido');
                        } else {
                            resolve(contenido);
                        }
                    }
                );
            }
        );
        return miPrimerPromesa;
    }

    function promesaEscribirArchivo(path, contenidoActual, contenidoNuevo){
        const miPromesa = new Promise( //Definicion de la Promesa
            (resolve, reject) => {
                contenidoFinal = contenidoActual +'\n'+ contenidoNuevo;
                fs.writeFile(
                    path,
                    contenidoFinal,
                    'utf-8',
                    (errorWrite) => {
                        if (errorWrite) {
                            reject('error en escritura contenido');
                        } else {
                            resolve('Escritura realizada correctamente');
                        }
                    }
                );
            }
        );
        return miPromesa;
    }
function ejercicio(path, contenidoNuevo) {
    promesaLeerArchivo(path)
        .then(
            (datosPromesa) =>{
                console.log(datosPromesa);
                return promesaEscribirArchivo(path,datosPromesa,contenidoNuevo);
            }
        )   //try
        .then(
            (datosActualizados) =>{
                console.log(datosActualizados);
                return promesaLeerArchivo(path);
            }
        )
        .then(
            (datos) =>{
                console.log(datos);
            }
        )

}

ejercicio('./06-ejemplo.txt', 'Buenas mañanas');



