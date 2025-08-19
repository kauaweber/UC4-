import { animal } from "./animal.js";

// Usamos a palavra reservada 'extends' para identificar que uma classe é filha de outra
export class Dog extends animal {
    // Dog, como é filho da classe Animal, ja herda os atributos 'name' e 'weight'
    
    constructor(name: string, weight: number) {
    // O metodo 'super()' chama o contrutor da classe pai
    // Assim, reutilizamos ele na classe filha
        super(name, weight)
    }
    bark(){
        console.log(`${this.name} is barking`)
    }
}