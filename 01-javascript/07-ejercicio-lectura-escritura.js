const fs = require('fs');
/*Hacer una funcion que me acepte como parametro una variable con el path del archivo
* y el contenido a agregar al contenido del archivo. La funcion debe tomar estos dos parametros y leer
* el archivo y añadir el texto al final del archivo*/
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        './06-ejemplo.txt' ,
        'utf-8',
        (error, contenido) =>{
            if(error){
                console.error({mensaje:'error leyendo contenido', error:error});
            }else {
                contenidoFinal = contenido +""+ contenidoNuevo;
                fs.writeFile(
                    path,
                    contenidoFinal,
                    'utf-8',
                    (errorWrite)=>{
                        if(errorWrite){
                            console.error({mensaje:'error en escritura de archivo', error:errorWrite});
                        }else{
                            console.log("Escritura realizada correctamente")
                        }
                    }

                );

            }
        }
    );
}
escribirArchivo(
    './06-ejemplo.txt',
    'Buenas tardes'
);