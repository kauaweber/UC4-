export abstract class Clan {
    nomeDoCla: string;
    lider: string;

    constructor(nomeDoClan: string, lider: string) {
        this.nomeDoCla = nomeDoClan;
        this.lider = lider;
    }
    public abstract habilidadeEspecial(): void;

    public exibirDetalhes(): void {
        console.log(`Nome do Clã: ${this.nomeDoCla}, Líder: ${this.lider}`);

    }    
}