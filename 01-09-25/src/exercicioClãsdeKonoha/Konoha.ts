import { ClanAkimichi } from "./ClaAkimichi";
import { ClanHyuuga } from "./ClaHyuuga";
import { ClanNara } from "./ClaNara";
import { ClanUchiha } from "./ClaUchiha";

console.log("Exibindo detalhes dos clãs de Konoha:");

const clans = [
    new ClanUchiha("Sasuke Uchiha"),
    new ClanHyuuga("Neji Hyuuga"),
    new ClanNara("Shikamaru Nara"),
    new ClanAkimichi("Choji Akimichi"),
];
clans.forEach((clan) => {
    clan.exibirDetalhes();
    clan.habilidadeEspecial();
    console.log("--------------------");
});