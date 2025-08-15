"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entregador = void 0;
class Entregador {
    constructor(nome) {
        this.nome = nome;
    }
    //Metodo que recebe um objeto do tipo pacote
    entregarPacote(pacote) {
        console.log("entregando pacote para" + pacote.getDestino() + " com peso " + pacote.getPeso() + "kg.");
    }
    trocarEndereco(pacote, novoDestino) {
        pacote.setDestino(novoDestino);
        console.log("Endereço do pacote alterado para: " + pacote.getDestino());
    }
}
exports.Entregador = Entregador;
