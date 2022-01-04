// 01-JAVASCRIPT

//          01-variables.ts
//Mutables e inmutables
//Mutables

var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Inmutables
const configuracionArchivos = "PDF";
//configuracionArchivos = "XML";
//Vamos a preferir CONST > LET > NUNCA VAR

//Tipos de Variables
const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Lesly"; //String
const apellido = "Tipanluiza"; //String
const booleanooo = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd"));
console.log(Number("asd"));

//Truty Falsy

if(""){
    console.log("String vacio es verdadero");
}else {
    console.log("String vacio Es Falsy");
}
if("Lesly"){
    console.log("String con datos Es Truty");
}else {
    console.log("String con datos Falso");
}

//En numeros
if(-1){
    console.log("Negativos Es truty");
}else {
    console.log("Negativos Es Falso");
}
if(0){
    console.log("Cero Es Truty");
}else {
    console.log("Cero Es Falso");
}
if(1){
    console.log("Positivos Es Truty");
}else {
    console.log("Positivos Es Falso");
}

//Null y undefined
if(null){
    console.log("Null Es Truty");
}else {
    console.log("Null Es Falso");
}
if(undefined){
    console.log("Undefined Es Truty");
}else {
    console.log("Undefined Es Falso");
}

//Orden de importancia
 //1) "const"
//2) "let"
//3) X --> "var"


//Objetos Javascript (JSON) - Arreglos

const lesly = {
    nombre: "Lesly", // llave: valor
    apellido : 'Tipanluiza',
    edad : 23,
    hijos : null,
    zapatos : undefined,
    casado : false,
    ropa: {
        color: 'rojo',
        talla: '34',
    },
    mascotas: ['mily','shapy','fiore'],
};

//Acceder a las propiedades del objeto
lesly.nombre; //"Lesly"
lesly.apellido; //'Tipanluiza'
lesly["nombre"]; // "Lesly"
console.log(lesly);
lesly.nombre = "Marisol";
console.log(lesly);
lesly["nombre"] = "Lesly";
lesly.sueldo; //undefined
console.log(lesly.sueldo);

lesly.sueldo = 1.2;
console.log(lesly.sueldo); //1.2
lesly["gastos"] = 0.8;
console.log(lesly.gastos); //0.8
lesly.nombre = undefined;
console.log(lesly);
console.log("LLAVES")
console.log(Object.keys(lesly));
console.log("VALORES")
console.log(Object.values(lesly));

delete lesly.nombre; // Eliminar la llave "nombre"
console.log(lesly);

//Variables por valor o referencia
//Variables por valor en JS son las primitivas

let edadLesly = 23;
let edadMarisol = edadLesly;

console.log(edadLesly); //23
console.log(edadMarisol);//23
edadLesly = edadLesly +1;
console.log(edadLesly); //24
console.log(edadMarisol);//23

//Variables por referencia: object ({},[])
// let rafael = {
//     nombre: "Rafael"
// }
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(rafael);
// console.log(lenin);
//
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);

let rafael = {
     nombre: "Rafael"
};
let lenin = Object.assign({}, rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
//delete rafael.nombre;
console.log(rafael);
console.log(lenin);

let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);
