// 04-clases.ts

class Persona{
    public nombre: string;
    public apellido: string
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = ''; // Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string, //Modificador de acceso --> Propiedad de la clase
        public estadoCivil: string //Modificador de acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
    }
}
const lesly = new Usuario(
    'Lesly',
    'Tipanluiza',
    '1751438498',
    'soltera'
);
lesly.nombre;
lesly.apellido;
lesly.cedula; //1751438498
lesly.estadoCivil; //'soltera'