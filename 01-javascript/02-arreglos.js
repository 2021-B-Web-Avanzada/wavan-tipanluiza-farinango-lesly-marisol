// 02-arreglos.js
let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Lesly", 'Tipanluiza', undefined, null,{}, [1,2]];
arreglo = [6, 7, 8, 9, 10];

//for of
for(let numero of arreglo){ //VALORES
    console.log('numero', numero);
}

//for in
for( let indice in arreglo){ //INDICES
    arreglo[indice];
    console.log('indice', indice);
}
let objetoPrueba = {a:'1',b:'2',c:'3'};
for(let llave in objetoPrueba) { //INDICES
    console.log('llave', llave);
}

arreglo.push(11); //Añadir al final de un elemento
//[6, 7, 8, 9, 10, 11]
arreglo.pop(); //Eliminar al final un elemento
//[6, 7, 8, 9, 10]
arreglo.unshift(5); //Añadir al principio del arreglo
//[5, 6, 7, 8, 9, 10]
console.log(arreglo);


arreglo.splice(0,0,4);
const indiceNueve = arreglo.indexOf(9);
arreglo.splice(indiceNueve,2);//Eliminar dos elemento desde el 9
console.log(arreglo);
