"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClanUchiha = void 0;
const Cla_1 = require("./Cla");
class ClanUchiha extends Cla_1.Clan {
    constructor(lider) {
        super("Uchiha", lider);
    }
    habilidadeEspecial() {
        console.log("Habilidade Especial: Sharingan");
    }
}
exports.ClanUchiha = ClanUchiha;
