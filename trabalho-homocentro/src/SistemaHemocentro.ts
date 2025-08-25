import * as readlineSync from "readline-sync";
import { Doador } from "./Doador";

export class SistemaHemocentro {
    private doadores: Doador[] = [];
    // Array que armazena todos os doadores cadastrados

    public cadastrarDoador(): void {
        console.log("=== CADASTRO DE DOADOR ===");
        const nome = readlineSync.question("Nome: ");
        const idade = parseInt(readlineSync.question("Idade: "));
        const peso = parseFloat(readlineSync.question("Peso: "));
        const tipoSanguineo = readlineSync.question("Tipo sanguineo: ");
        const dataUltimaDoacao = readlineSync.question("Data da ultima doacao (dd/mm/aaaa): ");

        const novoDoador = new Doador(nome, idade, peso, tipoSanguineo, dataUltimaDoacao);
        this.doadores.push(novoDoador);
        // Cria um novo doador e adiciona ao array de doadores

        console.log("\nDoador cadastrado com sucesso!");
    }

    public listarDoadores(): void {
        console.log("\n--------------------");
        console.log("LISTAGEM DE DOADORES:");
        console.log("--------------------");
        if (this.doadores.length === 0) {
            console.log("Nenhum doador cadastrado.");
            return;
        }

        // Cabeçalho da tabela de doadores
        console.log("NOME" + " | " + "IDADE" + " | " + "PESO" + " | " + "TIPO SANGUÍNEO" + " | " + "ÚLTIMA DOAÇÃO");
        console.log("-".repeat(65));

        // Mostra os dados de cada doador
        this.doadores.forEach(doador => console.log(doador.mostrarInfo()));
        console.log("-".repeat(65));
    }

    public buscarPorTipoSanguineo(): void {
        const tipo = readlineSync.question("\nDigite o tipo sanguineo desejado: ").toUpperCase();
        const encontrados = this.doadores.filter(d => d.getTipoSanguineo() === tipo);
        // Filtra doadores que têm o tipo sanguíneo informado

        console.log("------------------------");
        console.log("RESULTADO DA BUSCA:");
        console.log("------------------------");

        if (encontrados.length === 0) {
            console.log("Nenhum doador encontrado com esse tipo sanguíneo.");
            return;
        }

        console.log("NOME" + " | " + "IDADE" + " | " + "PESO" + " | " + "TIPO SANGUÍNEO" + " | " + "ÚLTIMA DOAÇÃO");
        console.log("-".repeat(65));
        encontrados.forEach(doador => console.log(doador.mostrarInfo()));
        console.log("-".repeat(65));
    }

    public buscarPorDataUltimaDoacao(): void {
        const dataBusca = readlineSync.question("\nDigite a data desejada (dd/mm/aaaa): ");
        const [diaB, mesB, anoB] = dataBusca.split("/").map(Number);
        const dataBuscaObj = new Date(anoB, mesB - 1, diaB);
        // Converte a data informada pelo usuário para objeto Date

        const encontrados = this.doadores.filter(d => {
            const [dia, mes, ano] = d.getDataUltimaDoacao().split("/").map(Number);
            const dataDoacao = new Date(ano, mes - 1, dia);
            return dataDoacao < dataBuscaObj;
            // Retorna apenas doadores cuja última doação foi antes da data informada
        });

        console.log("------------------------");
        console.log("RESULTADO DA BUSCA:");
        console.log("------------------------");

        if (encontrados.length === 0) {
            console.log("Nenhum doador encontrado antes dessa data.");
            return;
        }

        console.log("NOME" + " | " + "IDADE" + " | " + "PESO" + " | " + "TIPO SANGUÍNEO" + " | " + "ÚLTIMA DOAÇÃO");
        console.log("-".repeat(65));
        encontrados.forEach(doador => console.log(doador.mostrarInfo()));
        console.log("-".repeat(65));
    }
}
