import { Produto } from "./Produto";


export class Roupa {
    constructor(
        public descricao: string,
        public tamanho: string,
        public preco: number
    ) {}
    exibir(): string {
        return `👕 Roupa - Tipo: ${this.descricao}, Tamanho: ${this.tamanho}, Preço: R$${this.preco}`;
      }
}
export default Roupa;