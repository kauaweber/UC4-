import { Produto } from "./Produto";

export class Estoque<T extends Produto> {
    private produtos: T[] = [];
  
    adicionar(produto: T) {
      this.produtos.push(produto);
    }
  
    listar() {
      if (this.produtos.length === 0) {
        console.log("⚠️ Nenhum produto cadastrado.");
      } else {
        this.produtos.forEach((p, i) => {
          console.log(`[${i}] ${p.exibir()}`);
        });
      }
    }
  
    remover(indice: number) {
      if (indice >= 0 && indice < this.produtos.length) {
        this.produtos.splice(indice, 1);
        console.log("✅ Produto removido com sucesso!");
      } else {
        console.log("❌ Índice inválido!");
      }
    }
  
    temProdutos(): boolean {
      return this.produtos.length > 0;
    }
  
    buscar(termo: string) {
      const resultados = this.produtos.filter((p) =>
        p.exibir().toLowerCase().includes(termo.toLowerCase())
      );
  
      if (resultados.length === 0) {
        console.log(`⚠️ Nenhum produto encontrado com: "${termo}"`);
      } else {
        resultados.forEach((p, i) => {
          console.log(`[${i}] ${p.exibir()}`);
        });
      }
    }
  }


export default Estoque;