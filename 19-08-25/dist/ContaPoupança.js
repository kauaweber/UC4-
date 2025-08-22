"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaPoupanca extends ContaBancaria_1.default {
    aplicarJuros(taxa) {
        let juros = this.saldo * taxa;
        this.atualizarSaldo(juros);
        console.log(`Juros de ${juros} aplicados com sucesso!`);
    }
}
exports.ContaPoupanca = ContaPoupanca;
exports.default = ContaPoupanca;
