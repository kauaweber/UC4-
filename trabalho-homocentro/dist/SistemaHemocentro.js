"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaHemocentro = void 0;
const readlineSync = __importStar(require("readline-sync"));
const Doador_1 = require("./Doador");
class SistemaHemocentro {
    constructor() {
        this.doadores = [];
    }
    // Array que armazena todos os doadores cadastrados
    cadastrarDoador() {
        console.log("=== CADASTRO DE DOADOR ===");
        const nome = readlineSync.question("Nome: ");
        const idade = parseInt(readlineSync.question("Idade: "));
        const peso = parseFloat(readlineSync.question("Peso: "));
        const tipoSanguineo = readlineSync.question("Tipo sanguineo: ");
        const dataUltimaDoacao = readlineSync.question("Data da ultima doacao (dd/mm/aaaa): ");
        const novoDoador = new Doador_1.Doador(nome, idade, peso, tipoSanguineo, dataUltimaDoacao);
        this.doadores.push(novoDoador);
        // Cria um novo doador e adiciona ao array de doadores
        console.log("\nDoador cadastrado com sucesso!");
    }
    listarDoadores() {
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
    buscarPorTipoSanguineo() {
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
    buscarPorDataUltimaDoacao() {
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
exports.SistemaHemocentro = SistemaHemocentro;
