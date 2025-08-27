export class Pessoa {
    protected nome: string;
    protected idade: number;
    protected peso: number;
    // Atributos básicos de uma pessoa, protegidos para permitir herança

    constructor(nome: string, idade: number, peso: number) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    public mostrarInfo(): string {
        // Retorna as informações principais da pessoa em formato de string
        return `${this.nome} | ${this.idade} | ${this.peso}`;
    }

    // Métodos getters para acessar os atributos de forma controlada
    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getPeso(): number {
        return this.peso;
    }
}
