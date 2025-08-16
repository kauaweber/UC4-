"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
// personagem.ts
class Personagem {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
        switch (classe.toLowerCase()) {
            case "guerreiro":
                this.vida = 120;
                this.vidaMaxima = 120;
                this.forca = 25;
                break;
            case "mago":
                this.vida = 80;
                this.vidaMaxima = 80;
                this.forca = 35;
                break;
            case "arqueiro":
                this.vida = 100;
                this.vidaMaxima = 100;
                this.forca = 20;
                break;
            default:
                this.vida = 100;
                this.vidaMaxima = 100;
                this.forca = 20;
                console.log("⚠ Classe desconhecida, atributos padrão aplicados.");
        }
    }
    atacar(oponente) {
        console.log(`${this.nome} (${this.classe}) atacou ${oponente.getNome()}!`);
        oponente.perderVida(this.forca);
    }
    curar(quantidade) {
        if (this.vida <= 0) {
            console.log(`${this.nome} não pode se curar porque já foi derrotado!`);
            return;
        }
        const vidaAntes = this.vida;
        this.vida = Math.min(this.vida + quantidade, this.vidaMaxima);
        const vidaCurada = this.vida - vidaAntes;
        console.log(`${this.nome} se curou em ${vidaCurada} pontos! ❤️ Vida atual: ${this.vida}`);
    }
    perderVida(quantidade) {
        this.vida -= quantidade;
        console.log(`${this.nome} perdeu ${quantidade} de vida! 💔 Vida atual: ${this.vida}`);
        if (this.vida <= 0) {
            this.vida = 0;
            console.log(`💀 ${this.nome} foi derrotado!`);
        }
    }
    getNome() { return this.nome; }
    getVida() { return this.vida; }
    getClasse() { return this.classe; }
    getVidaMaxima() { return this.vidaMaxima; }
}
exports.Personagem = Personagem;
