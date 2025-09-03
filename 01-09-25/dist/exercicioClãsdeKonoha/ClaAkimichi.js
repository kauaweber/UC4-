"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClanAkimichi = void 0;
const Cla_1 = require("./Cla");
class ClanAkimichi extends Cla_1.Clan {
    constructor(lider) {
        super("Akimichi", lider);
    }
    habilidadeEspecial() {
        console.log("Habilidade Especial: Ampliação Corporal");
    }
}
exports.ClanAkimichi = ClanAkimichi;
