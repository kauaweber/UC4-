export class Pacote {
    private destino: string;
    private peso: number;

    constructor(destino: string, peso: number) {
        this.destino = destino;
        this.peso = peso;
    }
    setDestino(destino:string): void {
        this.destino = destino;
    }
    setPeso(peso:number): void {
        if (peso <= 0) {
        console.log("Peso nao pode ser negativo.");
        } else {
            this.peso = peso;
        }

    }
    getDestino(): string {
        return this.destino;
    }
    getPeso(): number {
        return this.peso;
    }
}
