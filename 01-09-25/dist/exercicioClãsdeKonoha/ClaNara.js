"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClanNara = void 0;
const Cla_1 = require("./Cla");
class ClanNara extends Cla_1.Clan {
    constructor(lider) {
        super("Nara", lider);
    }
    habilidadeEspecial() {
        console.log("Habilidade Especial: Manipulação de Sombras");
    }
}
exports.ClanNara = ClanNara;
