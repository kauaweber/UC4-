"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClaAkimichi_1 = require("./ClaAkimichi");
var ClaHyuuga_1 = require("./ClaHyuuga");
var ClaNara_1 = require("./ClaNara");
var ClaUchiha_1 = require("./ClaUchiha");
console.log("Exibindo detalhes dos clãs de Konoha:");
var clans = [
    new ClaUchiha_1.ClanUchiha("Sasuke Uchiha"),
    new ClaHyuuga_1.ClanHyuuga("Neji Hyuuga"),
    new ClaNara_1.ClanNara("Shikamaru Nara"),
    new ClaAkimichi_1.ClanAkimichi("Choji Akimichi"),
];
clans.forEach(function (clan) {
    clan.exibirDetalhes();
    clan.habilidadeEspecial();
    console.log("--------------------");
});
