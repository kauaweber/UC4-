import { IFuncionario } from "./IFuncionario";

export function calcularBonus(funcionario: IFuncionario): number {
    return funcionario.salario * 0.1;
}