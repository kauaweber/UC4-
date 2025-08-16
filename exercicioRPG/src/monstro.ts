
export class Monstro {
    private nome: string;
    private vida: number;
    private forca: number;

    constructor(nome: string, vida: number, forca: number) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

    atacar(oponente: { perderVida: (qtd: number) => void, getNome: () => string }) {
        console.log(`${this.nome} atacou ${oponente.getNome()}!`);
        oponente.perderVida(this.forca);
    }

    perderVida(quantidade: number) {
        this.vida -= quantidade;
        console.log(`${this.nome} perdeu ${quantidade} de vida! Vida atual: ${this.vida}`);
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }

    getNome() { return this.nome; }
    getVida() { return this.vida; }
}
