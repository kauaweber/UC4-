"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doador = void 0;
const Pessoa_1 = require("./Pessoa");
class Doador extends Pessoa_1.Pessoa {
    // Atributos específicos de um doador além dos herdados de Pessoa
    constructor(nome, idade, peso, tipoSanguineo, dataUltimaDoacao) {
        super(nome, idade, peso);
        // Chama o construtor da classe Pessoa para inicializar nome, idade e peso
        this.tipoSanguineo = tipoSanguineo.toUpperCase();
        // Sempre guarda o tipo sanguíneo em letras maiúsculas
        this.dataUltimaDoacao = dataUltimaDoacao;
    }
    mostrarInfo() {
        // Retorna todas as informações do doador em formato de string
        return `Nome: ${this.nome} | Idade: ${this.idade} | Peso: ${this.peso} | Tipo: ${this.tipoSanguineo} | Última doação: ${this.dataUltimaDoacao}`;
    }
    // Getters para acessar os novos atributos
    getTipoSanguineo() {
        return this.tipoSanguineo;
    }
    getDataUltimaDoacao() {
        return this.dataUltimaDoacao;
    }
}
exports.Doador = Doador;
