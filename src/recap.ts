// const miNombre = 'Mathias';
// const miEdad = 12;
const suma = (a: number, b: number): number => {
  return a + b;
};
suma(2, 4);

class Persona {
  private edad: number;
  public nombre: string;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  getSaludo(): string {
    return `Hola ${this.nombre} con ${this.edad}, cómo estás ?`;
  }
}

const mauro = new Persona('Mauro', 22);
console.log(mauro.getSaludo());
