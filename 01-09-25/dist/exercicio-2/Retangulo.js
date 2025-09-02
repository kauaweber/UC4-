"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
const Forma_1 = require("./Forma");
class Retangulo extends Forma_1.Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
}
exports.Retangulo = Retangulo;
