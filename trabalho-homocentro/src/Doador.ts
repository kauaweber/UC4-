export class Doador {
    protected tipoSanguineo: string
    protected dataUltimaDoacao: string

    constructor(tipoSanguineo: string, dataUltimaDoacao: string) {
        this.tipoSanguineo = tipoSanguineo;
        this.dataUltimaDoacao = dataUltimaDoacao;
    }
    mostrarInfo(): string {
        return `Tipo Sanguíneo: ${this.tipoSanguineo}, Data da Última Doação: ${this.dataUltimaDoacao}`;
    }
    getTipoSanguineo(): string {
        return this.tipoSanguineo;
    }
    getDataUltimaDoacao(): string {
        return this.dataUltimaDoacao;
    }
}