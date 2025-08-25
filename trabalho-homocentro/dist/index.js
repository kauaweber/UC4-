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
const readlineSync = __importStar(require("readline-sync"));
// Biblioteca para ler entrada do usuário pelo console
const SistemaHemocentro_1 = require("./SistemaHemocentro");
// Classe que contém as regras de cadastro, listagem e busca de doadores
function main() {
    const sistema = new SistemaHemocentro_1.SistemaHemocentro();
    // Cria um objeto do sistema para gerenciar os doadores
    let opcao = "";
    do {
        console.log("\n===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====");
        console.log("1. Cadastrar doador");
        console.log("2. Listar doadores");
        console.log("3. Buscar doador por tipo sanguíneo");
        console.log("4. Buscar doador por data da última doação");
        console.log("5. Sair");
        opcao = readlineSync.question("Escolha uma opcao: ");
        // Pergunta a opção que o usuário deseja
        switch (opcao) {
            case "1":
                sistema.cadastrarDoador();
                // Executa o cadastro de um novo doador
                break;
            case "2":
                sistema.listarDoadores();
                // Mostra todos os doadores cadastrados
                break;
            case "3":
                sistema.buscarPorTipoSanguineo();
                break;
            case "4":
                sistema.buscarPorDataUltimaDoacao();
                break;
            case "5":
                console.log("Encerrando o sistema...");
                break;
            default:
                console.log("Opcao invalida. Tente novamente.");
        }
    } while (opcao !== "5");
    // Mantém o menu ativo até a opção 5 ser escolhida
}
main();
// Inicia o programa
