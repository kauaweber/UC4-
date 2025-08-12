"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
// A classe  funciona como um "molde para um tipo de dado"
// Export permite que importem depois esta classe em qualquer lugar do meuprojeto
// A palavra  "classe" indica que isto é uma classe
// Depois de classe, colocamos o nome da classe, que deve ser EXATAMENTE igual o nome do arquivo
class Cachorro {
    // Constructor de classe (função/metodo que é chamado AUTOMATICAMENTE quando crio um objeto a partir da classe). É nele que eu defino os valores que este objeto vai receber para os atribuitos
    constructor(name, years, race) {
        this.name = name;
        this.years = years;
        this.race = race;
    }
    // Metodos (coisas que objetos desta classe FAZEM)
    // Não usamos a palavra "function"
    latir() {
        console.log(`O cachorro de nome ${this.name} está latindo.`);
    }
    correr() {
        console.log(`O cachorro de raça ${this.race} esta correndo`);
    }
}
exports.Cachorro = Cachorro;
