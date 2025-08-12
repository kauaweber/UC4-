"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function calculadora() {
    let continuar = true;
    while (continuar) {
        console.log("=== CALCULADORA ===");
        console.log("1 - Adição");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Divisão");
        console.log("5 - Sair");
        const opcao = readline_sync_1.default.question("Escolha uma operação: ");
        if (opcao === "5") {
            console.log("Saindo da calculadora...");
            continuar = false;
            break;
        }
        const num1 = parseFloat(readline_sync_1.default.question("Digite o primeiro número: "));
        const num2 = parseFloat(readline_sync_1.default.question("Digite o segundo número: "));
        switch (opcao) {
            case "1":
                console.log(`Resultado: ${num1} + ${num2} = ${num1 + num2}`);
                break;
            case "2":
                console.log(`Resultado: ${num1} - ${num2} = ${num1 - num2}`);
                break;
            case "3":
                console.log(`Resultado: ${num1} * ${num2} = ${num1 * num2}`);
                break;
            case "4":
                if (num2 !== 0) {
                    console.log(`Resultado: ${num1} / ${num2} = ${num1 / num2}`);
                }
                else {
                    console.log("Erro: Divisão por zero não é permitida.");
                }
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
        console.log(); // Linha em branco para separar as operações
    }
}
calculadora();
