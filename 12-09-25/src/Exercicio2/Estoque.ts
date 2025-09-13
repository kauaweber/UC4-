export class Estoque {
    private produtos: string[] = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"];
    
    remover(produto: string | string[]): void {
      const removerLista = typeof produto === "string" ? [produto] : produto;
  
      const removidos: string[] = [];
      const naoEncontrados: string[] = [];
  
      for (const p of removerLista) {
        const index = this.produtos.indexOf(p);
        if (index !== -1) {
          this.produtos.splice(index, 1);
          removidos.push(p);
        } else {
          naoEncontrados.push(p);
        }
      }
  
      if (removidos.length > 0) {
        console.log(`Removidos: ${removidos.join(", ")}`);
      }
      if (naoEncontrados.length > 0) {
        console.log(`Não encontrados: ${naoEncontrados.join(", ")}`);
      }
    }
  
    listar(): void {
      console.log("Estoque atual:", this.produtos.join(", "));
    }
  }
  
  