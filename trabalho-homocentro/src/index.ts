import * as readlineSync from "readline-sync"; 
// Biblioteca para ler entrada do usuário pelo console

import { SistemaHemocentro } from "./SistemaHemocentro"; 
// Classe que contém as regras de cadastro, listagem e busca de doadores

function main() {
    const sistema = new SistemaHemocentro(); 
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
