//01-variables.ts

let nombre: string = 'Lesly'; //primitivo
let nombre2: String = 'Lesly2'; //Clase String
//nombre = 1;
nombre = 'Marisol';
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

//Duck Typing
let apellido = 'Tipanluiza'; //string
apellido = 'Lesly';//igual a otros string
apellido.toUpperCase();//métodos string

let marihuana: any =2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = '222';
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;
