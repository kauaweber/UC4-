"use strict";
// exercicio-1
Object.defineProperty(exports, "__esModule", { value: true });
const FuncionarioCLT_1 = require("./exercicio-1/FuncionarioCLT");
const FuncionarioPJ_1 = require("./exercicio-1/FuncionarioPJ");
const funcionarioCLT = new FuncionarioCLT_1.FuncionarioCLT("João", 1500);
const funcionarioPJ = new FuncionarioPJ_1.FuncionarioPJ("Maria", 100, 20);
console.log(`${funcionarioCLT.nome}  Salário: R$${funcionarioCLT.calcularSalario()}`);
console.log(`${funcionarioPJ.nome}  Salário: R$${funcionarioPJ.calcularSalario()}`);
console.log("\n---------------------------------------------------\n");
const Retangulo_1 = require("./exercicio-2/Retangulo");
const Triangulo_1 = require("./exercicio-2/Triangulo");
const formas = [
    new Retangulo_1.Retangulo(10, 5),
    new Triangulo_1.Triangulo(8, 6),
    new Retangulo_1.Retangulo(7, 3),
    new Triangulo_1.Triangulo(5, 4),
];
formas.forEach((forma, index) => {
    console.log(`Forma ${index + 1}: Área = ${forma.calcularArea()}`);
});
