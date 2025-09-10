import { Produto } from "./Produto";

export class Eletronico {
    constructor(
        public modelo: string,
        public marca: string,
        public preco: number
    ) {}
    exibir(): string {
        return `💻 Eletrônico - Nome: ${this.modelo}, Marca: ${this.marca}, Preço: R$${this.preco}`;
      }
}
export default Eletronico;