import { FormaGeometrica } from "./IFormaGeometrica";


export class Circulo implements FormaGeometrica {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}