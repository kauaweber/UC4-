"use strict";
// Circulo.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
exports.Circulo = Circulo;
