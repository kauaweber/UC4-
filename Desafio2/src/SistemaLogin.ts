

import { Autenticavel } from "./IAutenticavel";

export class SistemaLogin implements Autenticavel {
    autenticar(usuario: string, senha: string): boolean {
        return usuario === "admin" && senha === "1234";
    }
}