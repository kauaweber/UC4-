import { Pacote } from "./pacote.js";

export class Entregador {
    private nome : string;

    constructor(nome:string) {
        this.nome = nome;
    }

    //Metodo que recebe um objeto do tipo pacote
    entregarPacote(pacote: Pacote): void {
        console.log("entregando pacote para" + pacote.getDestino() + " com peso " + pacote.getPeso() + "kg.");

    }
    trocarEndereco(pacote: Pacote, novoDestino: string): void {
        pacote.setDestino(novoDestino);
        console.log("Endereço do pacote alterado para: " + pacote.getDestino());
    }

}