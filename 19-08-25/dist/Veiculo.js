"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(velocidade) {
        this.velocidade = velocidade;
    }
    acelerar() {
        this.velocidade += 10;
        console.log(`Veículo acelerado para ${this.velocidade} km/h`);
    }
    getVelocidade() {
        return this.velocidade;
    }
}
exports.Veiculo = Veiculo;
