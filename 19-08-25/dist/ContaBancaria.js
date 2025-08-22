"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    atualizarSaldo(valor) {
        this.saldo += valor;
    }
}
exports.ContaBancaria = ContaBancaria;
exports.default = ContaBancaria;
