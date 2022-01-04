// 03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Lesly',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Marisol',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];


// FUNCIONES COMO PARÁMETROS

//FIND
//Enviamos una expresion --> TRUTY FALSY
//Devuelve el primero que cumpla esa condicion

const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";

        }

    );
console.log('respuestaFind',respuestaFind)
//FINDINDEX
//Enviamos una expresion --> TRUTY FALSY
//Devuelve el primero que cumpla esa condicion

const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex); // indice -> 6 // No encuentra --> -1

//FOREACH
//Itera el arreglo

const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
        }
    );
console.log('respuestaForEach',respuestaForEach); // undefined

//MAP
//Enviamos los datos del nuevo arreglo
//devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual, indicaActual, arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap', respuestaMap);

//FILTER
//Enviamos los datos del nuevo arreglo
//Devuelve los elementos que cumplen esa condicion
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) =>{
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

//SOME -> Expresion
//DEVUELVE UN BOOLEANO
//Hay ALGUNA nota menor a nueve? SI NO
const respuestaSome = arreglo
    .some(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota <= 9;
        }
    );
console.log('respuestaSome', respuestaSome);

//EVERY -> Expresion
//DEVUELVE UN BOOLEANO
//Todas las notas son mayores a 14? SI NO
//AND
const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

//REDUCE
// REDUCE RIGHT

//[1,2,3,4,5,6,5,4,3,1]

const respuestaReduce = arreglo
    .reduce(
        function(valorAcumulado, valorActual,indice,arreglo){
            return (valorAcumulado + valorActual.nota);
        },
        100 //Acumulador
    );
console.log('respuestaReduce', respuestaReduce); //100 - X = -46


console.log('this is me trying: ')