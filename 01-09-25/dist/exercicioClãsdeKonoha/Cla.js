"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clan = void 0;
class Clan {
    constructor(nomeDoClan, lider) {
        this.nomeDoCla = nomeDoClan;
        this.lider = lider;
    }
    exibirDetalhes() {
        console.log(`Nome do Clã: ${this.nomeDoCla}, Líder: ${this.lider}`);
    }
}
exports.Clan = Clan;
