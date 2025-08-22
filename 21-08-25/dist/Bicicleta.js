"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
const Veiculo_1 = require("./Veiculo");
class Bicicleta extends Veiculo_1.Veiculo {
    mover() {
        console.log('A bicicleta está se movendo!');
    }
}
exports.Bicicleta = Bicicleta;
