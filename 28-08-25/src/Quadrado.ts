
import { FormaGeometrica } from "./IFormaGeometrica";


export class Quadrado implements FormaGeometrica {
    lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}