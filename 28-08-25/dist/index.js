"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Aqui criamos um objeto do tipo IUsuario, ou seja, um objeto que SEGUE AS REGRAS da interface que criamos
const meuUsuario = {
    nome: "Kaua",
    idade: 16
};
console.log(meuUsuario.idade);
function mostrarProduto(produto) {
    console.log(`${produto.nome} custa R$ ${produto.preco}`);
}
const produto = {
    nome: "Camiseta",
    preco: 99.99
};
mostrarProduto(produto);
mostrarProduto({ nome: "Tenis", preco: 99.99 });
// Exercicio 1 
const livro1 = {
    titulo: 'O Senhor dos Aneis',
    autor: 'J.R.R Tolkien',
    anoPublicacao: 1954
};
function mostrarLivro(livro) {
    console.log(`Titulo: ${livro.titulo}
                \nAutor: ${livro.autor}
                \nAno: ${livro.anoPublicacao}`);
}
mostrarLivro(livro1);
const IcalcularBonus_1 = require("./IcalcularBonus");
const Quadrado_1 = require("./Quadrado");
const Circulo_1 = require("./Circulo");
// Exemplo de uso de IFuncionario e calcularBonus
const funcionario = { nome: "João", cargo: "Desenvolvedor", salario: 5000 };
console.log(`Bônus: R$ ${(0, IcalcularBonus_1.calcularBonus)(funcionario)}`);
// Exemplo de uso de Quadrado e Circulo
const quadrado = new Quadrado_1.Quadrado(4);
console.log(`Área do quadrado: ${quadrado.calcularArea()}`);
const circulo = new Circulo_1.Circulo(3);
console.log(`Área do círculo: ${circulo.calcularArea()}`);
