"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    falar() {
        console.log('O gato está miando.');
    }
}
exports.Gato = Gato;
