
export class Veiculo {
    protected velocidade: number

    constructor(velocidade: number) {
        this.velocidade = velocidade;
    }

    acelerar(): void {
        this.velocidade += 10;
        console.log(`Veículo acelerado para ${this.velocidade} km/h`);
    }
    getVelocidade(): number {
        return this.velocidade;
    }

}