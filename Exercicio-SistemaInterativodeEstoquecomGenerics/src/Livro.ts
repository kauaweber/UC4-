import { Produto } from "./Produto";

export class Livro {

    constructor(
        public titulo: string,
        public autor: string,
        public preco: number
    ) {}
    exibir(): string {
        return `📚 Livro - Título: ${this.titulo}, Autor: ${this.autor}, Preço: R$${this.preco}`;
      }
}
export default Livro;
