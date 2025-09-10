"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FuncionarioCLT_1 = require("./ex1/FuncionarioCLT");
const FuncionarioPJ_1 = require("./ex1/FuncionarioPJ");
// exercicio-1
const funcionarios = [
    new FuncionarioCLT_1.FuncionarioCLT("João"),
    new FuncionarioPJ_1.FuncionarioPJ("Maria"),
];
funcionarios.forEach((funcionario) => {
    console.log(`Funcionário: ${funcionario.getNome()}, Salário: R$${funcionario.calcularSalario()}`);
});
console.log("\n---------------------------------------------------\n");
const Retangulo_1 = require("./ex2/Retangulo");
const Triangulo_1 = require("./ex2/Triangulo");
const formas = [
    new Retangulo_1.Retangulo(),
    new Triangulo_1.Triangulo()
];
formas.forEach((forma) => {
    console.log(`Forma: ${forma.name}, Área: ${forma.calcularArea(3, 5)}`);
});
// Desafio 
const Cliente_1 = require("./Desafio/Cliente");
const Administrador_1 = require("./Desafio/Administrador");
function login(usuario, nomeUsuario, senha) {
    if (usuario.autenticar(nomeUsuario, senha)) {
        usuario.acessarSistema();
    }
    else {
        console.log("Falha na autenticação.");
    }
}
const admin = new Administrador_1.Administrador("Carlos", "adminUser", "adminPass");
const cliente = new Cliente_1.Cliente("Ana", "clientUser", "clientPass");
console.log("Tentativa de login como administrador:");
login(admin, "admin", "1234");
console.log("\nTentativa de login como cliente:");
login(cliente, "cliente", "abcd");
console.log("\nTentativa de login com credenciais inválidas:");
login(cliente, "cliente", "senhaErrada");
console.log("\n---------------------------------------------------\n");
// exercicio Clas de Konoha
const ClaUchiha_1 = require("./exercicioCl\u00E3sdeKonoha/ClaUchiha");
const ClaHyuuga_1 = require("./exercicioCl\u00E3sdeKonoha/ClaHyuuga");
const ClaNara_1 = require("./exercicioCl\u00E3sdeKonoha/ClaNara");
const ClaAkimichi_1 = require("./exercicioCl\u00E3sdeKonoha/ClaAkimichi");
console.log("Exibindo detalhes dos clãs de Konoha:");
const clans = [
    new ClaUchiha_1.ClanUchiha("Sasuke Uchiha"),
    new ClaHyuuga_1.ClanHyuuga("Neji Hyuuga"),
    new ClaNara_1.ClanNara("Shikamaru Nara"),
    new ClaAkimichi_1.ClanAkimichi("Choji Akimichi"),
];
clans.forEach((clan) => {
    clan.exibirDetalhes();
    clan.habilidadeEspecial();
    console.log("--------------------");
});
