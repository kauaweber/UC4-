"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quadrado_1 = require("./Quadrado");
const Circulo_1 = require("./Circulo");
const quadrado = new Quadrado_1.Quadrado(4);
console.log(`Área do quadrado: ${quadrado.calcularArea()}`);
const circulo = new Circulo_1.Circulo(3);
console.log(`Área do círculo: ${circulo.calcularArea()}`);
