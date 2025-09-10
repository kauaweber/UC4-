import { Produto } from "./Produto";

export class Brinquedo{
    constructor(
        public nome: string,
        public idadeMinima: number,
        public preco: number
    ) {}
    exibir(): string {
        return ` Brinquedo - Nome: ${this.nome}, Marca: ${this.idadeMinima}, Preço: R$${this.preco}`;
      }
}
export default Brinquedo;