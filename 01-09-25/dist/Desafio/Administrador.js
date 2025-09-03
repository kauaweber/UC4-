"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = void 0;
const UsuarioSistema_1 = require("./UsuarioSistema");
class Administrador extends UsuarioSistema_1.UsuarioSistema {
    constructor(nome, usuario, senha) {
        super(nome);
        this.usuario = usuario;
        this.senha = senha;
    }
    autenticar(usuario, senha) {
        return this.usuario === usuario && this.senha === senha;
    }
    acessarSistema() {
        console.log(`Administrador ${this.nome} acessou o sistema.`);
    }
}
exports.Administrador = Administrador;
