"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClanUchiha = void 0;
var Cla_1 = require("./Cla");
var ClanUchiha = /** @class */ (function (_super) {
    __extends(ClanUchiha, _super);
    function ClanUchiha(lider) {
        return _super.call(this, "Uchiha", lider) || this;
    }
    ClanUchiha.prototype.habilidadeEspecial = function () {
        console.log("Habilidade Especial: Sharingan");
    };
    return ClanUchiha;
}(Cla_1.Clan));
exports.ClanUchiha = ClanUchiha;
