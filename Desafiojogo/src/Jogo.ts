import * as readline from "readline-sync";

export class Jogo {
    private numeroSecreto: number;
    private tentativas: number;

    constructor() {
        this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
        this.tentativas = 0;
    }

    public jogar() {
        console.log("🎮 Bem-vindo ao jogo de adivinhar o número!");
        console.log("Tente adivinhar um número entre 1 e 100.");

        let acertou = false;

        while (!acertou) {
            const palpite = readline.questionInt("Digite seu palpite: ");
            this.tentativas++;

            if (palpite === this.numeroSecreto) {
                console.log(`🎉 Parabéns! Você acertou em ${this.tentativas} tentativas!`);
                acertou = true;
            } else if (palpite < this.numeroSecreto) {
                console.log("🔼 O número é MAIOR.");
            } else {
                console.log("🔽 O número secreto é MENOR.");
            }
        }
    }
}
