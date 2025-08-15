export class personagem {
    nome: string;
    classe: string;
    vida: number;
    força: number;

    constructor(nome: string, classe: string, vida: number, força: number) {
        this.nome = nome;
        this.classe = nome;
        this.vida = vida;
        this.força = força;
    }
    atacar(): string {
        return this.nome + " ataca com força de" + this.força + " ponto de dano.";
    }
    receberDano(dano:number): void {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    estaVivo(): boolean {
        return this.vida > 0;
    }
    getNome(): string {
        return this.nome;
    }
    getVida(): number {
        return this.vida;
    }
    getForça(): number {
        return this.força;
    }
    getClasse(): string {
        return this.classe;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setVida(vida: number): void {
        this.vida = vida;
    }
    setForça(força: number): void {
        this.força = força;
    }
    setClasse(classe: string): void {
        this.classe = classe;
    }
    
}
