// exercicio-1

import { FuncionarioCLT } from "./exercicio-1/FuncionarioCLT";
import { FuncionarioPJ } from "./exercicio-1/FuncionarioPJ";

const funcionarioCLT = new FuncionarioCLT("João", 1500);
const funcionarioPJ = new FuncionarioPJ("Maria", 100, 20);

console.log(`${funcionarioCLT.nome}  Salário: R$${funcionarioCLT.calcularSalario()}`); 
console.log(`${funcionarioPJ.nome}  Salário: R$${funcionarioPJ.calcularSalario()}`); 

console.log("\n---------------------------------------------------\n");
// exercicio-2

import { Forma} from "./exercicio-2/Forma";
import { Retangulo } from "./exercicio-2/Retangulo";
import { Triangulo } from "./exercicio-2/Triangulo";

const formas: Forma[] = [
    new Retangulo(10, 5),
    new Triangulo(8, 6),
    new Retangulo(7, 3),
    new Triangulo(5, 4),
];

formas.forEach((forma, index) => {
    console.log(`Forma ${index + 1}: Área = ${forma.calcularArea()}`);
});