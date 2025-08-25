import { Pessoa } from "./Pessoa";

export class Doador extends Pessoa {
    protected tipoSanguineo: string;
    protected dataUltimaDoacao: string;
    // Atributos específicos de um doador além dos herdados de Pessoa

    constructor(nome: string, idade: number, peso: number, tipoSanguineo: string, dataUltimaDoacao: string) {
        super(nome, idade, peso); 
        // Chama o construtor da classe Pessoa para inicializar nome, idade e peso
        this.tipoSanguineo = tipoSanguineo.toUpperCase(); 
        // Sempre guarda o tipo sanguíneo em letras maiúsculas
        this.dataUltimaDoacao = dataUltimaDoacao;
    }

    public mostrarInfo(): string {
        // Retorna todas as informações do doador em formato de string
        return `Nome: ${this.nome} | Idade: ${this.idade} | Peso: ${this.peso} | Tipo: ${this.tipoSanguineo} | Última doação: ${this.dataUltimaDoacao}`;
    }

    // Getters para acessar os novos atributos
    public getTipoSanguineo(): string {
        return this.tipoSanguineo;
    }

    public getDataUltimaDoacao(): string {
        return this.dataUltimaDoacao;
    }
}
