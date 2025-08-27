"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    // Atributos básicos de uma pessoa, protegidos para permitir herança
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    mostrarInfo() {
        // Retorna as informações principais da pessoa em formato de string
        return `${this.nome} | ${this.idade} | ${this.peso}`;
    }
    // Métodos getters para acessar os atributos de forma controlada
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
