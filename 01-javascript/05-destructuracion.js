// 05-destructuracion.js

const lesly = {
    nombre: "Lesly"
};

const marisol = {
    nombre: "Marisol",
    apellido: "Tipanluiza"
};

const leslyMarisol ={ //Creando nueva referencia
    ...marisol, // 1 El orden es importante para propiedades que se repiten
    ...lesly,   // 2 El ultimo reemplaza a los anteriores
};
console.log('leslyMarisol', leslyMarisol);

// Destructuracion de arreglos

const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno, //El orden importa
    ...arregloDos,
];
console.log('superArreglo', superArreglo);

console.log(...superArreglo); //console.log(1,2,3,4,5,...,10)
