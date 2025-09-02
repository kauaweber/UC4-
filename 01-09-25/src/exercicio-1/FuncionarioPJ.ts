import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario {
    horasTrabalhadas: number;
    valorPorHora: number;

    constructor(nome: string, horasTrabalhadas: number, valorPorHora: number) {
        super(nome);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorPorHora = valorPorHora;
    }

    calcularSalario(): number {
        return this.horasTrabalhadas * this.valorPorHora;
    }
}