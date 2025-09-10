"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clan = void 0;
var Clan = /** @class */ (function () {
    function Clan(nomeDoClan, lider) {
        this.nomeDoCla = nomeDoClan;
        this.lider = lider;
    }
    Clan.prototype.exibirDetalhes = function () {
        console.log("Nome do Cl\u00E3: ".concat(this.nomeDoCla, ", L\u00EDder: ").concat(this.lider));
    };
    return Clan;
}());
exports.Clan = Clan;
