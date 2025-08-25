"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    mostrarInfo() {
        return `${this.nome} | ${this.idade} | ${this.peso}`;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getPeso() {
        return this.peso;
    }
}
exports.Pessoa = Pessoa;
