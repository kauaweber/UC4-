"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaLogin = void 0;
class SistemaLogin {
    autenticar(usuario, senha) {
        return usuario === "admin" && senha === "1234";
    }
}
exports.SistemaLogin = SistemaLogin;
