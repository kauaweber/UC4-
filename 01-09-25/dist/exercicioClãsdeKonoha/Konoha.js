"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClaAkimichi_1 = require("./ClaAkimichi");
const ClaHyuuga_1 = require("./ClaHyuuga");
const ClaNara_1 = require("./ClaNara");
const ClaUchiha_1 = require("./ClaUchiha");
console.log("Exibindo detalhes dos clãs de Konoha:");
const clans = [
    new ClaUchiha_1.ClanUchiha("Sasuke Uchiha"),
    new ClaHyuuga_1.ClanHyuuga("Neji Hyuuga"),
    new ClaNara_1.ClanNara("Shikamaru Nara"),
    new ClaAkimichi_1.ClanAkimichi("Choji Akimichi"),
];
clans.forEach((clan) => {
    clan.exibirDetalhes();
    clan.habilidadeEspecial();
    console.log("--------------------");
});
