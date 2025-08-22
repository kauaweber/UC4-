"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_js_1 = require("./Veiculo.js");
class Carro extends Veiculo_js_1.Veiculo {
    mover() {
        console.log('O carro está se movendo!');
    }
}
exports.Carro = Carro;
