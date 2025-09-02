"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioCLT = void 0;
const Funcionario_1 = require("./Funcionario");
class FuncionarioCLT extends Funcionario_1.Funcionario {
    constructor(nome, salarioFixo) {
        super(nome);
        this.salarioFixo = salarioFixo;
    }
    calcularSalario() {
        return this.salarioFixo;
    }
}
exports.FuncionarioCLT = FuncionarioCLT;
