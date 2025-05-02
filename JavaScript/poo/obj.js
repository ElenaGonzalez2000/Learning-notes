class Persona {

    // nombre = '';     esto no sirve ya que el constructor lo pisa con undefined, deberia eviatarlo para que tome estos datos si no necesito logica en el constructor
    // edad = 0;

    constructor(nombre = '', edad = 0) {  //o asignar valores por defecto en las propiedades 
        this.nombre = nombre
        this.edad = edad
    }
}
const p1 = new Persona();
console.log(p1.nombre)