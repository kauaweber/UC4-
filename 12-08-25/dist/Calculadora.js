"use strict";
// Crie um novo arquivo chamado Calculadora
// dentro deste crie a classe Calculadora
// crie os atributos numeroUm e numeroDois
// faça o construtor 
// depois, faça os metos somar, subtrair, multiplicar e dividir
// apos isso, NO ARQUIVO 'index.ts', instancie a classe e chame seus metodos
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(numeroUm, numeroDois) {
        this.numeroUm = numeroUm;
        this.numeroDois = numeroDois;
    }
    somar() {
        return this.numeroUm + this.numeroDois;
    }
    subtrair() {
        return this.numeroUm - this.numeroDois;
    }
    multiplicar() {
        return this.numeroUm * this.numeroDois;
    }
    dividir() {
        if (this.numeroDois === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return this.numeroUm / this.numeroDois;
    }
}
exports.Calculadora = Calculadora;
