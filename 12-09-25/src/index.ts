import { Calculadora } from "./Calculadora";
import { Desenhista } from "./Desenhista";
import { Loja } from "./Exercicio/Loja";
import { Estoque } from "./Exercicio2/Estoque";
import { Mensageiro } from "./Mensageiro";
import { Repositorio } from "./Repositorio";


const calc:Calculadora = new Calculadora();

// Passando numbers
calc.somar(1, 2)
// passando strings 
calc.somar('Kaua ', 'Weber')

console.log('------------------');

const m: Mensageiro = new Mensageiro();

m.enviar('Ana', 'Oi, tudo bem?')
m.enviar(['João', 'Maria'], 'Bom dia, galera!')

console.log('------------------');

const d = new Desenhista();

d.desenhar(10);
d.desenhar(20, 30);

const r = new Repositorio();

r.buscar(1);
r.buscar('a');

console.log("\n")

const minhaLoja = new Loja();
minhaLoja.adicionarProduto("Camisa");
minhaLoja.adicionarProduto(["Calça", "Tênis", "Boné"]);
minhaLoja.listarProdutos();

console.log("\n")

// Exemplo de uso
const estoque = new Estoque();
estoque.listar();

estoque.remover("Arroz");
estoque.remover(["Feijão", "Refrigerante"]); // Refrigerante não existe

estoque.listar();
