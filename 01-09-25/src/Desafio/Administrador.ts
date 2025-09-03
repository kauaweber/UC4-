import { IAutenticavel } from "./IAutenticavel";
import { UsuarioSistema } from "./UsuarioSistema";

export class Administrador extends UsuarioSistema implements IAutenticavel {
    private usuario : string;
    private senha: string;

    constructor(nome: string, usuario: string, senha: string) {
        super(nome);
        this.usuario = usuario;
        this.senha = senha;
    }
    autenticar(usuario: string, senha: string): boolean {
        return this.usuario === usuario && this.senha === senha;
    }
    acessarSistema(): void {
        console.log(`Administrador ${this.nome} acessou o sistema.`);
    }
}