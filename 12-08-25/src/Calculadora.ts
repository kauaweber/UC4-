// Crie um novo arquivo chamado Calculadora
// dentro deste crie a classe Calculadora
// crie os atributos numeroUm e numeroDois
// faça o construtor 
// depois, faça os metos somar, subtrair, multiplicar e dividir
// apos isso, NO ARQUIVO 'index.ts', instancie a classe e chame seus metodos

export class Calculadora {
    numeroUm: number;
    numeroDois: number;

    constructor(numeroUm: number, numeroDois: number) {
        this.numeroUm = numeroUm;
        this.numeroDois = numeroDois;
    }

    somar(): number {
        return this.numeroUm + this.numeroDois;
    }

    subtrair(): number {
        return this.numeroUm - this.numeroDois;
    }

    multiplicar(): number {
        return this.numeroUm * this.numeroDois;
    }

    dividir(): number {
        if (this.numeroDois === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return this.numeroUm / this.numeroDois;
    }
}