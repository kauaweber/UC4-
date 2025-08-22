"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    constructor(vida) {
        super(vida);
    }
    // Método público que chama o protected de outra instância via método público
    atacar(inimigo) {
        console.log(`O guerreiro está atacando...`);
        inimigo.receberDano(10); // usa o método público, que chama o protected internamente
    }
    // Método que acessa diretamente o protected da própria instância
    treinar() {
        console.log(`${this.constructor.name} treinando...`);
        this.sofrerDano(5); // ✅ permitido: acessando protected da própria instância
    }
}
exports.Guerreiro = Guerreiro;
