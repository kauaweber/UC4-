export abstract class Funcionario {
    nome : string;

    constructor(nome: string) {
        this.nome = nome;
    }

    abstract calcularSalario(): number;
}