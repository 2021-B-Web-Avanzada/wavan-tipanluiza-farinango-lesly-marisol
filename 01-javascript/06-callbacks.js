// 06-callbacks.js
const fs = require('fs'); // file system
//console.log('PRIMERO');
// 06-06-ejemplo.txt -> Hola

fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) =>{
        if(error){
            console.error({mensaje:'error leyendo contenido', error:error});
        }else {
            console.log(contenido)

        }
    }
);
// console.log('TERCERO');

// fs.readFile(
//    './01-variables.ts' ,
//     'utf-8',
//     (error, contenido1) =>{
//         if(error){
//             console.error({mensaje:'error leyendo contenido 1', error:error});
//         }else {
//             //console.log(contenido)
//             fs.readFile(
//                 './06-ejemplo.txt' ,
//                 'utf-8',
//                 (error2, contenido2) =>{
//                     if(error2){
//                         console.error({mensaje:'error leyendo contenido 2', error:error2});
//                     }else {
//                         console.log(contenido1, contenido2);
//
//                     }
//                 }
//             );
//
//         }
//     }
// );