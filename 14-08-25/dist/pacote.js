"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pacote = void 0;
class Pacote {
    constructor(destino, peso) {
        this.destino = destino;
        this.peso = peso;
    }
    setDestino(destino) {
        this.destino = destino;
    }
    setPeso(peso) {
        if (peso <= 0) {
            console.log("Peso nao pode ser negativo.");
        }
        else {
            this.peso = peso;
        }
    }
    getDestino() {
        return this.destino;
    }
    getPeso() {
        return this.peso;
    }
}
exports.Pacote = Pacote;
