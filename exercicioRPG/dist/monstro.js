"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
class Monstro {
    constructor(nome, vida, forca) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }
    atacar(oponente) {
        console.log(`${this.nome} atacou ${oponente.getNome()}!`);
        oponente.perderVida(this.forca);
    }
    perderVida(quantidade) {
        this.vida -= quantidade;
        console.log(`${this.nome} perdeu ${quantidade} de vida! Vida atual: ${this.vida}`);
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }
    getNome() { return this.nome; }
    getVida() { return this.vida; }
}
exports.Monstro = Monstro;
