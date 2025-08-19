"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const animal_js_1 = require("./animal.js");
// Usamos a palavra reservada 'extends' para identificar que uma classe é filha de outra
class Dog extends animal_js_1.animal {
    // Dog, como é filho da classe Animal, ja herda os atributos 'name' e 'weight'
    constructor(name, weight) {
        // O metodo 'super()' chama o contrutor da classe pai
        // Assim, reutilizamos ele na classe filha
        super(name, weight);
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}
exports.Dog = Dog;
