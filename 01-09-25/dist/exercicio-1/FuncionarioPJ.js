"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioPJ = void 0;
const Funcionario_1 = require("./Funcionario");
class FuncionarioPJ extends Funcionario_1.Funcionario {
    constructor(nome, horasTrabalhadas, valorPorHora) {
        super(nome);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorPorHora = valorPorHora;
    }
    calcularSalario() {
        return this.horasTrabalhadas * this.valorPorHora;
    }
}
exports.FuncionarioPJ = FuncionarioPJ;
