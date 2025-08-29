import { Quadrado } from "./Quadrado";
import { Circulo } from "./Circulo";

const quadrado = new Quadrado(4);
console.log(`Área do quadrado: ${quadrado.calcularArea()}`);

const circulo = new Circulo(3);
console.log(`Área do círculo: ${circulo.calcularArea()}`);