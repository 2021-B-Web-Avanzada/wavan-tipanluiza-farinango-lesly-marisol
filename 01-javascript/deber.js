
const inquirer = require("inquirer");
const fs = require('fs');
let arreglo = [];
let arregloInfo = [];
let arregloArtista = [];
const ingresarGenero = () =>{
    return{
        type: 'input',
        name: 'nombreGenero',
        message: 'Ingrese el nombre del género:'
    }
}

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
            contenidoFinal = contenidoActual +' '+ contenidoNuevo;
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
function guardarDatos(path, contenidoNuevo) {
    promesaLeerArchivo(path)
        .then(
            (datosPromesa) =>{
               return  promesaEscribirArchivo(path,datosPromesa,contenidoNuevo);
            }
        )

}
function buscarGeneroNombre(nombreGenero,nombreArreglo){
        const respuestaFind = nombreArreglo
        .find(
            function (valorActual, indiceActual, arregloCompleto){
                return valorActual.nombre === nombreGenero;
            }
        );
    console.log('Datos encontrados: ', respuestaFind);
}
async function obtenerDatos(buscarNombre,arregloActual){
    await promesaLeerArchivo('./generos.txt')
        .then(
            (datosPromesa) =>{
                let contenido = datosPromesa.split(' ');

                let datosGenero='';
                let datosAnio ='';
                let datosPopularidad ='';
                let datosInstrumento ='';
                let datosLugar ='';
                //unir datos en una sola cadena los generos
                for (let i=1; i < contenido.length;i+=5) {
                    datosGenero = datosGenero + ' ' + contenido[i];

                }
                //unir datos en una sola cadena de años
                for (let i=2; i < contenido.length;i+=5) {
                    datosAnio = datosAnio+' '+contenido[i];

                }
                for (let i=3; i < contenido.length;i+=5) {
                    datosPopularidad = datosPopularidad+' '+contenido[i];

                }
                for (let i=4; i < contenido.length;i+=5) {
                    datosInstrumento = datosInstrumento +' '+contenido[i];

                }
                for (let i=5; i < contenido.length;i+=5) {
                    datosLugar = datosLugar+' '+contenido[i];

                }




            //separar datos para obtener los arreglos
                let contGeneros = datosGenero.split(' ');
                let contAnios = datosAnio.split(' ');
                let contPopularidad = datosPopularidad.split(' ');
                let contInstrumento = datosInstrumento.split(' ');
                let contLugar = datosLugar.split(' ');

                for (let j=1; j<contGeneros.length;j++){
                    arregloActual.push({
                        nombre: contGeneros[j],
                        año: parseInt(contAnios[j]),
                        popularidad: contPopularidad[j],
                        instrumento: contInstrumento[j],
                        lugar: contLugar[j],
                    });
                }

            }
        )
        .then(
            ()=>{
                buscarGeneroNombre(buscarNombre,arregloActual)
            }
        )


}
function obtenerIndiceActual (nombreGeneroActual,arregActual){
    const indiceActual = arregActual
        .findIndex(
            function (valorActual, indiceActual, arregloCompleto){
                return valorActual.nombre === nombreGeneroActual;
            }
        );
    return indiceActual;
}

function promesaActualizarArchivo(path,contenidoNuevo){
    const promesaAct = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoNuevo,
                'utf-8',
                (errorWrite) => {
                    if (errorWrite) {
                        reject('error en escritura contenido');
                    } else {
                        resolve('Contenido eliminado');
                    }
                }
            );
        }
    );
    return promesaAct;
}

function actualizarContenido(contenidoActualizado,path){
    let valores = '';
    for(let numero of contenidoActualizado){ //VALORES
        const arregloDatos = Object.values(numero);
        for(let x=0; x<arregloDatos.length; x++){
            valores = valores+' '+arregloDatos[x];
        }
    }
    console.log('Datos actualizados: ',valores);
    promesaActualizarArchivo(path, valores)

}

async function obtenerInformacion(){
    await promesaLeerArchivo('./informacion.txt')
        .then(
            (datosPromesa) =>{
                let contenido = datosPromesa.split(' ');
                let datoGenero='';
                let datoNomArtista ='';
                let datoApArtista ='';
                //unir datos en una sola cadena
                for (let i=1; i < contenido.length;i+=3) {
                    datoGenero = datoGenero + ' ' + contenido[i];
                }

                for (let i=2; i < contenido.length;i+=3) {
                    datoNomArtista = datoNomArtista+' '+contenido[i];
                }

                for (let i=3; i < contenido.length;i+=3) {
                    datoApArtista = datoApArtista+' '+contenido[i];
                }

                //separar datos para obtener los arreglos

                let contGeneros = datoGenero.split(' ');
                let contNomArtista = datoNomArtista.split(' ');
                let contApArtista = datoApArtista.split(' ');

                for (let j=1; j<contGeneros.length;j++){
                    arregloInfo.push({
                        genero: contGeneros[j],
                        nombreArtista: contNomArtista[j],
                        apellidoArtista: contApArtista[j],
                    });
                }
            }
        )
}

async function obtenerDatosArtista(buscarNombre,arregloAct){
    await promesaLeerArchivo('./artistas.txt')
        .then(
            (datosPromesa) =>{
                let contenido = datosPromesa.split(' ');
                let datosNombre='';
                let datosApellido ='';
                let datosEdad = '';
                let datosNacionalidad = '';
                let datosEstado = '';
                let datosVoz = '';
                //unir datos en una sola cadena los generos
                for (let i=1; i < contenido.length;i+=6) {
                    datosNombre = datosNombre + ' ' + contenido[i];
                }
                //unir datos en una sola cadena de años
                for (let i=2; i < contenido.length;i+=6) {
                    datosApellido = datosApellido+' '+contenido[i];
                }
                for (let i=3; i < contenido.length;i+=6) {
                    datosEdad = datosEdad+' '+contenido[i];
                }
                for (let i=4; i < contenido.length;i+=6) {
                    datosNacionalidad = datosNacionalidad+' '+contenido[i];
                }
                for (let i=5; i < contenido.length;i+=6) {
                    datosEstado = datosEstado+' '+contenido[i];
                }
                for (let i=6; i < contenido.length;i+=6) {
                    datosVoz = datosVoz+' '+contenido[i];
                }
                //separar datos para obtener los arreglos
                let contNombres = datosNombre.split(' ');
                let contApellidos = datosApellido.split(' ');
                let contEdades = datosEdad.split(' ');
                let contNacionalidad = datosNacionalidad.split(' ');
                let contEstado = datosEstado.split(' ');
                let contVoz = datosVoz.split(' ');
            //Crear arreglo con todos los datos del ARTISTA
                for (let j=1; j<contNombres.length;j++){
                    arregloAct.push({
                        nombre: contNombres[j],
                        apellido: contApellidos[j],
                        edad: contEdades[j],
                        nacionalidad: contNacionalidad[j],
                        retirado: contEstado[j],
                        voz: contVoz[j],
                    });
                }
            }
        )
        .then(
            ()=>{
                buscarGeneroNombre(buscarNombre,arregloAct)
            }
        )
}



async function main(){
    try {

        console.log("**** SELECCIONE UNA OPCIÓN ****")
        console.log("1. Crear nuevo GÉNERO")
        console.log("2. Buscar GÉNERO")
        console.log("3. Actualizar GÉNERO")
        console.log("4. Eliminar GÉNERO")

        const seleccion = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "opcion",
                    message: "Escriba una opción del 1 al 4:"
                }
            ]);
        switch (seleccion.opcion){
            case '1':
                const genero = await inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "nomGenero",
                            message: "Ingrese el nombre del género: "
                        },
                        {
                            type:"input",
                            name:"anio",
                            message:"Ingrese el año de origen:"
                        },
                        {
                            type:"input",
                            name:"popularidad",
                            message:"Popularidad:"
                        },
                        {
                            type:"input",
                            name:"instrumento",
                            message:"Instrumento común:"
                        },
                        {
                            type:"input",
                            name:"lugar",
                            message:"Lugar de origen:"
                        },

                    ]);

                const data =genero.nomGenero +' '+ genero.anio+' '+genero.popularidad+' '+genero.instrumento+' '+genero.lugar;
                guardarDatos('./generos.txt', data);
                break;
            case '2':
                console.log("BUSCAR GÉNERO");
                const buscar = await inquirer.prompt(ingresarGenero())
                obtenerDatos(buscar.nombreGenero,arreglo)
                    .then(
                       async ()=> {
                           console.log('Lista de Artistas que pertenecen a este género')
                           await obtenerInformacion()
                           const respuestaFilter = arregloInfo
                               .filter(
                                   (valorActual, indiceActual, arregloCompleto) => {
                                       return valorActual.genero === buscar.nombreGenero;
                                   }
                               );
                           const arregloInfoMap = respuestaFilter
                               .map(
                                   (valorActual, indicaActual, arregloCompleto) => {
                                       return valorActual.nombreArtista + ' ' + valorActual.apellidoArtista;
                                   }
                               );
                           //Imprimir el arreglo con nombres de Artistas que pertenecen al género
                           console.log(arregloInfoMap)

                           console.log('SELECCIONE UNA ACCIÓN')
                           console.log('1. Añadir nuevo Artista')
                           console.log('2. Buscar datos de Artista')
                           console.log('3. Actualizar Artista')
                           console.log('4. Eliminar Artista')
                           console.log('5. SALIR')
                           const op2 = await inquirer
                               .prompt([
                                   {
                                       type: "input",
                                       name: "opc2",
                                       message: "Ingrese una opción entre 1 y 5: "
                                   },
                               ]);
                           switch (op2.opc2) {
                               case '1':
                                   console.log('AÑADIR NUEVO ARTISTA')
                                   const artista = await inquirer
                                       .prompt([
                                           {
                                               type: "input",
                                               name: "nomArtista",
                                               message: "Ingrese el nombre del artista: "
                                           },
                                           {
                                               type: "input",
                                               name: "edad",
                                               message: "Ingrese edad:"
                                           },
                                           {
                                               type: "input",
                                               name: "nacionalidad",
                                               message: "Ingrese nacionalidad:"
                                           },
                                           {
                                               type: "input",
                                               name: "estado",
                                               message: "¿Está retirado?:"
                                           },
                                           {
                                               type: "input",
                                               name: "voz",
                                               message: "Ingrese el tipo de voz:"
                                           }
                                       ]);
                                   const data = artista.nomArtista + ' ' + artista.edad+' '+artista.nacionalidad+' '+artista.estado+' '+artista.voz;
                                   guardarDatos('./artistas.txt', data);
                                   const info = buscar.nombreGenero + ' ' + artista.nomArtista;
                                   guardarDatos('./informacion.txt', info);

                                   break;
                               case '2':
                                   console.log('BUSCAR DATOS DEL ARTISTA')
                                   const buscarArt = await inquirer
                                       .prompt([
                                           {
                                               type: "input",
                                               name: "nomArtista",
                                               message: "Ingrese nombre del artista: "
                                           },
                                       ]);
                                   await obtenerDatosArtista(buscarArt.nomArtista, arregloArtista);
                                   break;
                               case '3':
                                   console.log('ACTUALIZAR DATOS DEL ARTISTA')
                                   const actArt = await inquirer
                                       .prompt([
                                           {
                                               type: "input",
                                               name: "nomArtista",
                                               message: "Ingrese nombre del artista: "
                                           },
                                       ]);
                                   await obtenerDatosArtista(actArt.nomArtista, arregloArtista)
                                       .then(
                                           async () => {
                                               console.log('Seleccione dato a Actualizar:')
                                               console.log("1. Nombre")
                                               console.log("2. Apellido")
                                               console.log("3. Edad")
                                               console.log("4. Nacionalidad")
                                               console.log("5. Retirado")
                                               console.log("6. Tipo de Voz")

                                               const op3 = await inquirer
                                                   .prompt([
                                                       {
                                                           type: "input",
                                                           name: "opc3",
                                                           message: "Escriba una opción entre 1 y 6:"
                                                       }
                                                   ]);
                                               switch (op3.opc3) {
                                                   case '1':
                                                       const ind = obtenerIndiceActual(actArt.nomArtista, arregloArtista)
                                                       const actNomArt = await inquirer
                                                           .prompt([{
                                                               type: "input",
                                                               name: "nuevoNomArt",
                                                               message: "Ingrese el nuevo nombre:"
                                                           }]);
                                                       //ACTUALIZAR ARCHIVO INFORMACION
                                                       const respMapInf = arregloInfo
                                                           .map(
                                                               (valorActual, indicaActual, arregloCompleto) => {

                                                                   if (indicaActual === ind) {
                                                                       valorActual.nombreArtista = actNomArt.nuevoNomArt;
                                                                   }
                                                                   const nuevoElemento = {
                                                                       genero: valorActual.genero,
                                                                       nombreArtista: valorActual.nombreArtista,
                                                                       apellidoArtista: valorActual.apellidoArtista,
                                                                   };
                                                                   return nuevoElemento;
                                                               }
                                                           );
                                                       console.log('respMapINF', respMapInf);
                                                       actualizarContenido(respMapInf, './informacion.txt');
                                                       //ACTUALIZAR ARCHIVO ARTISTA
                                                       const respMapArt = arregloArtista
                                                           .map(
                                                               (valorActual, indicaActual, arregloCompleto) => {
                                                                   if (indicaActual === ind) {
                                                                       valorActual.nombre = actNomArt.nuevoNomArt;
                                                                   }
                                                                   const nuevoElemento = {
                                                                       nombre: valorActual.nombre,
                                                                       apellido: valorActual.apellido,
                                                                       edad: valorActual.edad,
                                                                   };
                                                                   return nuevoElemento;
                                                               }
                                                           );
                                                       actualizarContenido(respMapArt, './artistas.txt');
                                                       break;
                                                   case '2':
                                                       const ind1 = obtenerIndiceActual(actArt.nomArtista, arregloArtista)
                                                       const actApeArt = await inquirer
                                                           .prompt([{
                                                               type: "input",
                                                               name: "nuevoApeArt",
                                                               message: "Ingrese el nuevo apellido:"
                                                           }]);
                                                       //ACTUALIZAR ARCHIVO INFORMACION
                                                       const respMapApe = arregloInfo
                                                           .map(
                                                               (valorActual, indicaActual, arregloCompleto) => {
                                                                   if (indicaActual === ind1) {
                                                                       valorActual.apellidoArtista = actApeArt.nuevoApeArt;
                                                                   }
                                                                   const nuevoElemento = {
                                                                       genero: valorActual.genero,
                                                                       nombreArtista: valorActual.nombreArtista,
                                                                       apellidoArtista: valorActual.apellidoArtista,
                                                                   };
                                                                   return nuevoElemento;
                                                               }
                                                           );
                                                       actualizarContenido(respMapApe, './informacion.txt');

                                                       //ACTUALIZAR ARCHIVO ARTISTA
                                                       const respMapApeArt = arregloArtista
                                                           .map(
                                                               (valorActual, indicaActual, arregloCompleto) => {

                                                                   if (indicaActual === ind1) {
                                                                       valorActual.apellido = actApeArt.nuevoApeArt;
                                                                   }
                                                                   const nuevoElemento = {
                                                                       nombre: valorActual.nombre,
                                                                       apellido: valorActual.apellido,
                                                                       edad: valorActual.edad,
                                                                       nacionalidad: valorActual.nacionalidad,
                                                                       retirado: valorActual.retirado,
                                                                       voz: valorActual.voz,
                                                                   };
                                                                   return nuevoElemento;
                                                               }
                                                           );
                                                       actualizarContenido(respMapApeArt, './artistas.txt');
                                                       break;
                                                   case '3':
                                                       console.log('ACTUALIZAR EDAD')
                                                       const ind2 = obtenerIndiceActual(actArt.nomArtista, arregloArtista)
                                                       const actEdadArt = await inquirer
                                                           .prompt([{
                                                               type: "input",
                                                               name: "nuevaEdadArt",
                                                               message: "Ingrese nueva edad:"
                                                           }]);
                                                       const respMapEdadArt = arregloArtista
                                                           .map(
                                                               (valorActual, indicaActual, arregloCompleto) => {

                                                                   if (indicaActual === ind2) {
                                                                       valorActual.edad= actEdadArt.nuevaEdadArt;
                                                                   }
                                                                   const nuevoElemento = {
                                                                       nombre: valorActual.nombre,
                                                                       apellido: valorActual.apellido,
                                                                       edad: valorActual.edad,
                                                                       nacionalidad: valorActual.nacionalidad,
                                                                       retirado: valorActual.retirado,
                                                                       voz: valorActual.voz,
                                                                   };
                                                                   return nuevoElemento;
                                                               }
                                                           );
                                                       actualizarContenido(respMapEdadArt, './artistas.txt');
                                                       break;
                                                   case '4':
                                                       console.log('ACTUALIZAR NACIONALIDAD')
                                                       const ind3 = obtenerIndiceActual(actArt.nomArtista, arregloArtista)
                                                       const actNacArt = await inquirer
                                                           .prompt([{
                                                               type: "input",
                                                               name: "nuevoNacArt",
                                                               message: "Ingrese nueva nacionalidad:"
                                                           }]);
                                                       const respMapNacArt = arregloArtista
                                                           .map(
                                                               (valorActual, indicaActual, arregloCompleto) => {

                                                                   if (indicaActual === ind3) {
                                                                       valorActual.nacionalidad = actNacArt.nuevoNacArt;
                                                                   }
                                                                   const nuevoElemento = {
                                                                       nombre: valorActual.nombre,
                                                                       apellido: valorActual.apellido,
                                                                       edad: valorActual.edad,
                                                                       nacionalidad: valorActual.nacionalidad,
                                                                       retirado: valorActual.retirado,
                                                                       voz: valorActual.voz,
                                                                   };
                                                                   return nuevoElemento;
                                                               }
                                                           );
                                                       actualizarContenido(respMapNacArt, './artistas.txt');
                                                       break;
                                                   case '5':
                                                       console.log('ACTUALIZAR ESTADO')
                                                       const ind4 = obtenerIndiceActual(actArt.nomArtista, arregloArtista)
                                                       const actEstArt = await inquirer
                                                           .prompt([{
                                                               type: "input",
                                                               name: "nuevoEstArt",
                                                               message: "¿Está retirado?:"
                                                           }]);
                                                       const respMapEstArt = arregloArtista
                                                           .map(
                                                               (valorActual, indicaActual, arregloCompleto) => {

                                                                   if (indicaActual === ind4) {
                                                                       valorActual.retirado = actEstArt.nuevoEstArt;
                                                                   }
                                                                   const nuevoElemento = {
                                                                       nombre: valorActual.nombre,
                                                                       apellido: valorActual.apellido,
                                                                       edad: valorActual.edad,
                                                                       nacionalidad: valorActual.nacionalidad,
                                                                       retirado: valorActual.retirado,
                                                                       voz: valorActual.voz,
                                                                   };
                                                                   return nuevoElemento;
                                                               }
                                                           );
                                                       actualizarContenido(respMapEstArt, './artistas.txt');
                                                       break;
                                                   case '6':
                                                       console.log('ACTUALIZAR TIPO DE VOZ')
                                                       const ind5 = obtenerIndiceActual(actArt.nomArtista, arregloArtista)
                                                       const actVozArt = await inquirer
                                                           .prompt([{
                                                               type: "input",
                                                               name: "nuevaVozArt",
                                                               message: "Ingrese nuevo tipo de voz:"
                                                           }]);
                                                       const respMapVozArt = arregloArtista
                                                           .map(
                                                               (valorActual, indicaActual, arregloCompleto) => {

                                                                   if (indicaActual === ind5) {
                                                                       valorActual.voz = actVozArt.nuevaVozArt;
                                                                   }
                                                                   const nuevoElemento = {
                                                                       nombre: valorActual.nombre,
                                                                       apellido: valorActual.apellido,
                                                                       edad: valorActual.edad,
                                                                       nacionalidad: valorActual.nacionalidad,
                                                                       retirado: valorActual.retirado,
                                                                       voz: valorActual.voz,
                                                                   };
                                                                   return nuevoElemento;
                                                               }
                                                           );
                                                       actualizarContenido(respMapVozArt, './artistas.txt');
                                                       break;
                                                   default:
                                                       console.log('Opción ingresada: incorrecta')
                                               }
                                           }
                                       )
                                   break;
                               case '4':
                                   console.log('ELIMINAR ARTISTA')
                                   const elimArt = await inquirer
                                       .prompt([
                                           {
                                               type: "input",
                                               name: "eliminarArtista",
                                               message: "Ingrese nombre del artista: "
                                           },
                                       ]);
                                   await obtenerDatosArtista(elimArt.eliminarArtista, arregloArtista)
                                       .then(
                                           () => {
                                               const elimIndArt = obtenerIndiceActual(elimArt.eliminarArtista, arregloArtista)
                                               arregloArtista.splice(elimIndArt, 1)
                                               const elimIndInf = obtenerIndiceActual(elimArt.eliminarArtista, arregloInfo)
                                               arregloInfo.splice(elimIndInf, 1)
                                           }
                                       )
                                       .then(
                                           () => {
                                               promesaActualizarArchivo('./artistas.txt', '')
                                               promesaActualizarArchivo('./informacion.txt', '')
                                               //ACTUALIZAR ARCHIVO DE INFORMACION
                                               const elimMapInf = arregloInfo
                                                   .map(
                                                       (valorActual, indicaActual, arregloCompleto) => {
                                                           const nuevoElemento = {
                                                               genero: valorActual.genero,
                                                               nombreArtista: valorActual.nombreArtista,
                                                               apellidoArtista: valorActual.apellidoArtista,
                                                           };
                                                           return nuevoElemento;
                                                       }
                                                   );
                                               console.log('Dato eliminado');
                                               actualizarContenido(elimMapInf, './informacion.txt');

                                               //ACTUALIZAR ARCHIVO ARTISTAS
                                               const arregloArtMap = arregloArtista
                                                   .map(
                                                       (valorActual, indicaActual, arregloCompleto) => {
                                                           const nuevoElemento = {
                                                               nombre: valorActual.nombre,
                                                               apellido: valorActual.apellido,
                                                               edad: valorActual.edad,
                                                               nacionalidad: valorActual.nacionalidad,
                                                               retirado: valorActual.retirado,
                                                               voz: valorActual.voz,
                                                           };
                                                           return nuevoElemento;
                                                       }
                                                   );
                                               actualizarContenido(arregloArtMap, './artistas.txt');
                                           }
                                       )
                                   break;
                               default:
                                   console.log('Ejecución terminada')
                           }
                       }
                    )
                break;
            case '3':
                console.log("ACTUALIZAR DATOS DE GÉNERO")
                const buscarNombre = await inquirer.prompt(ingresarGenero())
                obtenerDatos(buscarNombre.nombreGenero,arreglo)
                    .then(
                        async()=>{
                            console.log('Seleccione dato a Actualizar:')
                            console.log("1. Nombre")
                            console.log("2. Año")
                            console.log("3. Popularidad")
                            console.log("4. Instrumento")
                            console.log("5. Lugar")
                            const opcion = await inquirer
                                .prompt([
                                    {
                                        type: "input",
                                        name: "op",
                                        message: "Escriba una opción entre 1 y 5:"
                                    }
                                ]);
                            switch (opcion.op){
                                case '1':
                                    const actNombre = await inquirer
                                        .prompt([{
                                            type: "input",
                                            name: "nuevoNombre",
                                            message: "Ingrese el nuevo nombre:"
                                        }]);
                                    const indice = obtenerIndiceActual(buscarNombre.nombreGenero, arreglo)
                                    const respuestaMap = arreglo
                                        .map(
                                            (valorActual, indicaActual, arregloCompleto) => {
                                                if(indicaActual === indice){
                                                    valorActual.nombre = actNombre.nuevoNombre;
                                                }
                                                const nuevoElemento = {
                                                    nombre: valorActual.nombre,
                                                    año: valorActual.año,
                                                    popularidad: valorActual.popularidad,
                                                    instrumento: valorActual.instrumento,
                                                    lugar: valorActual.lugar,
                                                };
                                                return nuevoElemento;
                                            }
                                        );
                                    actualizarContenido(respuestaMap,'./generos.txt');
                                    break;
                                case '2':
                                    console.log('ACTUALIZAR AÑO')
                                    const actAnio= await inquirer
                                        .prompt([{
                                            type: "input",
                                            name: "nuevoAnio",
                                            message: "Ingrese el nuevo año:"
                                        }]);
                                    const indice1 = obtenerIndiceActual(buscarNombre.nombreGenero, arreglo)
                                    const respMapAnio = arreglo
                                        .map(
                                            (valorActual, indicaActual, arregloCompleto) => {
                                                if(indicaActual === indice1){
                                                    valorActual.año = actAnio.nuevoAnio;
                                                }
                                                const nuevoElemento = {
                                                    nombre: valorActual.nombre,
                                                    año: valorActual.año,
                                                    popularidad: valorActual.popularidad,
                                                    instrumento: valorActual.instrumento,
                                                    lugar: valorActual.lugar,
                                                };
                                                return nuevoElemento;
                                            }
                                        );
                                    actualizarContenido(respMapAnio,'./generos.txt');
                                    break;
                                case '3':
                                    console.log('ACTUALIZAR POPULARIDAD')
                                    const actPopulariad= await inquirer
                                        .prompt([{
                                            type: "input",
                                            name: "nuevoPopularidad",
                                            message: "Ingrese popularidad:"
                                        }]);
                                    const indice2 = obtenerIndiceActual(buscarNombre.nombreGenero, arreglo)
                                    const respMapPopularidad = arreglo
                                        .map(
                                            (valorActual, indicaActual, arregloCompleto) => {
                                                if(indicaActual === indice2){
                                                    valorActual.popularidad = actPopulariad.nuevoPopularidad;
                                                }
                                                const nuevoElemento = {
                                                    nombre: valorActual.nombre,
                                                    año: valorActual.año,
                                                    popularidad: valorActual.popularidad,
                                                    instrumento: valorActual.instrumento,
                                                    lugar: valorActual.lugar,
                                                };
                                                return nuevoElemento;
                                            }
                                        );
                                    actualizarContenido(respMapPopularidad,'./generos.txt');
                                    break;
                                case '4':
                                    console.log('ACTUALIZAR INSTRUMENTO')
                                    const actInstrumento= await inquirer
                                        .prompt([{
                                            type: "input",
                                            name: "nuevoInstrumento",
                                            message: "Ingrese nuevo Instrumento:"
                                        }]);
                                    const indice3 = obtenerIndiceActual(buscarNombre.nombreGenero, arreglo)
                                    const respMapInstrumento = arreglo
                                        .map(
                                            (valorActual, indicaActual, arregloCompleto) => {
                                                if(indicaActual === indice3){
                                                    valorActual.instrumento = actInstrumento.nuevoInstrumento;
                                                }
                                                const nuevoElemento = {
                                                    nombre: valorActual.nombre,
                                                    año: valorActual.año,
                                                    popularidad: valorActual.popularidad,
                                                    instrumento: valorActual.instrumento,
                                                    lugar: valorActual.lugar,
                                                };
                                                return nuevoElemento;
                                            }
                                        );
                                    actualizarContenido(respMapInstrumento,'./generos.txt');
                                    break;
                                case '5':
                                    console.log('ACTUALIZAR LUGAR')
                                    const actLugar= await inquirer
                                        .prompt([{
                                            type: "input",
                                            name: "nuevoLugar",
                                            message: "Ingrese nuevo Lugar:"
                                        }]);
                                    const indice4 = obtenerIndiceActual(buscarNombre.nombreGenero, arreglo)
                                    const respMapLugar = arreglo
                                        .map(
                                            (valorActual, indicaActual, arregloCompleto) => {
                                                if(indicaActual === indice4){
                                                    valorActual.lugar = actLugar.nuevoLugar;
                                                }
                                                const nuevoElemento = {
                                                    nombre: valorActual.nombre,
                                                    año: valorActual.año,
                                                    popularidad: valorActual.popularidad,
                                                    instrumento: valorActual.instrumento,
                                                    lugar: valorActual.lugar,
                                                };
                                                return nuevoElemento;
                                            }
                                        );
                                    actualizarContenido(respMapLugar,'./generos.txt');
                                    break;
                                default:
                                    console.log('La opción ingresada es incorrecta')
                            }
                        }
                    )
                break;
            case '4':
                console.log('ELIMINAR GÉNERO')
                const elimNombre = await inquirer.prompt(ingresarGenero())
                obtenerDatos(elimNombre.nombreGenero,arreglo)
                    .then(
                        ()=>{
                            const elimIndice = obtenerIndiceActual(elimNombre.nombreGenero,arreglo)
                            arreglo.splice(elimIndice,1)
                        }
                    )
                    .then(
                        ()=>{
                            promesaActualizarArchivo('./generos.txt', '')
                            const arregloMap = arreglo
                                .map(
                                    (valorActual, indicaActual, arregloCompleto) => {
                                        const nuevoElemento = {
                                            nombre: valorActual.nombre,
                                            año: valorActual.año,
                                            popularidad: valorActual.popularidad,
                                            instrumento: valorActual.instrumento,
                                            lugar: valorActual.lugar,
                                        };
                                        return nuevoElemento;
                                    }
                                );
                            actualizarContenido(arregloMap,'./generos.txt');
                        }
                    )
                break;
            default:
                console.log("Ingresó una opción incorrecta")
        }
    }catch (e){
        console.log(e)
    }}

main();