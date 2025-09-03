"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClanHyuuga = void 0;
const Cla_1 = require("./Cla");
class ClanHyuuga extends Cla_1.Clan {
    constructor(lider) {
        super("Hyuuga", lider);
    }
    habilidadeEspecial() {
        console.log("Habilidade Especial: Byakugan");
    }
}
exports.ClanHyuuga = ClanHyuuga;
