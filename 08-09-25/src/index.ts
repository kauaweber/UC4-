// // crie uma funçao que aceite um array que pode ser de qualquer tipo (number, de strings, ou qualquer outro tipo) e retorne o primeiro item (return array [0]). Nao pode usar o tipo any


// function retornaItem<T>(item: T): T {
//     return item;
//   }
  
//   retornaItem<number>(10);     // ✅ retorna um número
//   retornaItem<string>("oi");   // ✅ retorna uma string
//   retornaItem<boolean>(true);  // ✅ retorna um boolean

// const array1 = [1, 2, 3, 4, 5];
// const array2 = ["a", "b", "c", "d", "e"];
// const array3 = [true, false, true, false];

// console.log(retornaItem(array1)[0]);   
// console.log(retornaItem(array2)[0]); 
// console.log(retornaItem(array3)[0]);


// // Restringindo os tipos que aceitamos
// /*
//   < extends { length: number } >
//     indica que o tipo genérico T deve ter uma propriedade length do tipo number.
// */

// function mostraTamanho<T extends { length: number }>(item: T): number {
//     return item.length;
//   }
  
//   mostraTamanho("Oi");        // ✅ funciona (string tem length)
//   mostraTamanho([1, 2, 3]);   // ✅ funciona (array tem length)
//   //mostraTamanho(123);         // ❌ erro (number não tem length)



// //  <T exetends string | number >
// //  So aceita algo que pode ser de um tipo OU de outro, besse caso string ou number
// //  Se for de qualquer outro tipo, nao aceita
//   function mostraValor<T extends string | number>(valor: T): T {
//     return valor;
//   }
  
//   mostraValor("Olá");  // ✅ string permitido
//   mostraValor(123);    // ✅ number permitido
//   //mostraValor(true);   // ❌ boolean não é aceito




//   interface TemNome {
//     nome: string;
//   }
  
//   function mostraNome<T extends TemNome>(obj: T): string {
//     return obj.nome;
//   }
  
//   mostraNome({ nome: "Ana" });             // ✅ ok
//   mostraNome({ nome: "João", idade: 20 }); // ✅ ok
//   //mostraNome({ idade: 20 });               // ❌ erro, não tem nome
  

//   function corEscolhida<T extends "vermelho" | "azul" | "verde">(cor: T): T {
//     return cor;
//   }
  
//   corEscolhida("vermelho"); // ✅
//   corEscolhida("azul");     // ✅
// // corEscolhida("preto");    // ❌ não permitido

// import { Estoque } from "./Estoque.js";
// import { Livro } from "./Livro.js";
// import { Roupa} from "./Roupa.js";

// const estoqueLivros = new Estoque<Livro>();
// estoqueLivros.adicionar(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954));
// estoqueLivros.adicionar(new Livro("1984", "George Orwell", 1949));

// const estoqueRoupas = new Estoque<Roupa>();
// estoqueRoupas.adicionar(new Roupa("Camiseta", "M", "Azul"));
// estoqueRoupas.adicionar(new Roupa("Calça", "G", "Preto"));

// console.log("Estoque de Livros:", estoqueLivros.listar());
// console.log("Estoque de Roupas:", estoqueRoupas.listar());

