export class Loja {
    private produtos: string[] = [];
  
    adicionarProduto(produto: string | string[]): void {
      if (typeof produto === "string") {
        this.produtos.push(produto);
        console.log(`Produto adicionado: ${produto}`);
      } else {
        this.produtos.push(...produto);
        console.log(`Produtos adicionados: ${produto.join(", ")}`);
      }
    }
  
    listarProdutos(): void {
      console.log("Produtos na loja:", this.produtos.join(", "));
    }
  }
  
  
  