import { ILivro } from "./ILivro";
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";

// Aqui criamos um objeto do tipo IUsuario, ou seja, um objeto que SEGUE AS REGRAS da interface que criamos

const meuUsuario:IUsuario = {
    nome:"Kaua",
    idade:16
}

console.log(meuUsuario.idade)

function mostrarProduto(produto:IProduto): void {
    console.log(`${produto.nome} custa R$ ${produto.preco}`)
}
const produto:IProduto = {
    nome:"Camiseta",
    preco:99.99
}

mostrarProduto(produto)
mostrarProduto({nome:"Tenis", preco: 99.99 })

// Exercicio 1 

const livro1:ILivro = {
    titulo:'O Senhor dos Aneis',
    autor:'J.R.R Tolkien',
    anoPublicacao:1954
}

function mostrarLivro(livro:ILivro): void {
    console.log(`Titulo: ${livro.titulo}
                \nAutor: ${livro.autor}
                \nAno: ${livro.anoPublicacao}`)
}

mostrarLivro(livro1)

// exrecicio 2
import { IFuncionario } from "./IFuncionario";     
import { calcularBonus } from "./IcalcularBonus";
import { Quadrado } from "./Quadrado";
import { Circulo } from "./Circulo";


const funcionario: IFuncionario = { nome: "João", cargo: "Desenvolvedor", salario: 5000 };
console.log(`Bônus: R$ ${calcularBonus(funcionario)}`);


const quadrado = new Quadrado(4);
console.log(`Área do quadrado: ${quadrado.calcularArea()}`);

const circulo = new Circulo(3);
console.log(`Área do círculo: ${circulo.calcularArea()}`);