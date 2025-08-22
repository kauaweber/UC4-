"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(vida) {
        this.vida = vida;
    }
    // Método protected: só pode ser chamado dentro da classe ou subclasses
    sofrerDano(valor) {
        this.vida -= valor;
        console.log(`O personagem sofreu ${valor} de dano. Vida atual: ${this.vida}`);
    }
    // Método público para permitir que outras instâncias recebam dano sem expor o protected
    receberDano(valor) {
        this.sofrerDano(valor);
    }
}
exports.Personagem = Personagem;
