import * as readline from "readline-sync";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";
import { Eletronico } from "./Eletronico";
import { Estoque } from "./Estoque";
import { Brinquedo } from "./Brinquedo"; // corrigido para export consistente

// Estoques específicos
const estoqueLivros = new Estoque<Livro>();
const estoqueRoupas = new Estoque<Roupa>();
const estoqueEletronicos = new Estoque<Eletronico>();
const estoqueBrinquedos = new Estoque<Brinquedo>();

let rodando = true;

while (rodando) {
  console.log("\n📦 SISTEMA DE ESTOQUE 📦");
  console.log("1 - Cadastrar produto");
  console.log("2 - Listar produtos");
  console.log("3 - Remover produto");
  console.log("4 - Buscar produto");
  console.log("5 - Sair");

  const opcao = readline.question("Escolha uma opcao: ");

  switch (opcao) {
    case "1":
      console.log("\nQual tipo de produto deseja cadastrar?");
      console.log("1 - Livro");
      console.log("2 - Roupa");
      console.log("3 - Eletronico");
      console.log("4 - Brinquedo"); // adicionado
      const tipo = readline.question("Escolha: ");

      if (tipo === "1") {
        const titulo = readline.question("Titulo: ");
        const autor = readline.question("Autor: ");
        const preco = parseFloat(readline.question("Preco: "));
        estoqueLivros.adicionar(new Livro(titulo, autor, preco));
      } else if (tipo === "2") {
        const descricao = readline.question("Descricao (Ex: Camisa): ");
        const tamanho = readline.question("Tamanho: ");
        const preco = parseFloat(readline.question("Preco: "));
        estoqueRoupas.adicionar(new Roupa(descricao, tamanho, preco));
      } else if (tipo === "3") {
        const nome = readline.question("Nome: ");
        const marca = readline.question("Marca: ");
        const preco = parseFloat(readline.question("Preco: "));
        estoqueEletronicos.adicionar(new Eletronico(nome, marca, preco));
      } else if (tipo === "4") {
        const nome = readline.question("Nome: ");
        const idadeMinima = parseInt(readline.question("Idade Minima: "));
        const preco = parseFloat(readline.question("Preco: "));
        estoqueBrinquedos.adicionar(new Brinquedo(nome, idadeMinima, preco));
      } else {
        console.log("❌ Tipo invalido!");
      }
      break;

    case "2":
      console.log("\n===== LISTAGEM DE PRODUTOS =====");
      let algumProduto = false;

      console.log("\n--- ESTOQUE DE LIVROS ---");
      estoqueLivros.listar();
      if (estoqueLivros.temProdutos()) algumProduto = true;

      console.log("\n--- ESTOQUE DE ROUPAS ---");
      estoqueRoupas.listar();
      if (estoqueRoupas.temProdutos()) algumProduto = true;

      console.log("\n--- ESTOQUE DE ELETRÔNICOS ---");
      estoqueEletronicos.listar();
      if (estoqueEletronicos.temProdutos()) algumProduto = true;

      console.log("\n--- ESTOQUE DE BRINQUEDOS ---");
      estoqueBrinquedos.listar(); // corrigido
      if (estoqueBrinquedos.temProdutos()) algumProduto = true;

      if (!algumProduto) {
        console.log("⚠️ Nenhum produto cadastrado em nenhum estoque!");
      }
      break;

    case "3":
      console.log("\nDe qual estoque deseja remover?");
      console.log("1 - Livros");
      console.log("2 - Roupas");
      console.log("3 - Eletronicos");
      console.log("4 - Brinquedos"); // adicionado
      const escolha = readline.question("Escolha: ");

      if (escolha === "1") {
        estoqueLivros.listar();
        const idx = parseInt(readline.question("Indice para remover: "));
        estoqueLivros.remover(idx);
      } else if (escolha === "2") {
        estoqueRoupas.listar();
        const idx = parseInt(readline.question("Indice para remover: "));
        estoqueRoupas.remover(idx);
      } else if (escolha === "3") {
        estoqueEletronicos.listar();
        const idx = parseInt(readline.question("Indice para remover: "));
        estoqueEletronicos.remover(idx);
      } else if (escolha === "4") {
        estoqueBrinquedos.listar();
        const idx = parseInt(readline.question("Indice para remover: "));
        estoqueBrinquedos.remover(idx);
      } else {
        console.log("❌ Opcao invalida!");
      }
      break;

    case "4":
      const termo = readline.question("\nDigite o termo para buscar: ");
      console.log("\n===== RESULTADOS DA BUSCA =====");

      console.log("\n--- ESTOQUE DE LIVROS ---");
      estoqueLivros.buscar(termo);

      console.log("\n--- ESTOQUE DE ROUPAS ---");
      estoqueRoupas.buscar(termo);

      console.log("\n--- ESTOQUE DE ELETRÔNICOS ---");
      estoqueEletronicos.buscar(termo);

      console.log("\n--- ESTOQUE DE BRINQUEDOS ---"); // corrigido (tirado break antes)
      estoqueBrinquedos.buscar(termo);
      break;

    case "5":
      console.log("👋 Saindo do sistema...");
      rodando = false;
      break;

    default:
      console.log("❌ Opção inválida!");
  }
}
