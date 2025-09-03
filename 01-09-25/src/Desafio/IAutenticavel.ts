export interface IAutenticavel {
    acessarSistema(): void;
    autenticar(usuario: string, senha: string): boolean
}