"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Animal_1 = require("./Animal");
class Cachorro extends Animal_1.Animal {
    // Sobrescrevendo um metodo
    // que foi criado na classe pai
    falar() {
        console.log('O cachorro está latindo.');
    }
}
exports.Cachorro = Cachorro;
