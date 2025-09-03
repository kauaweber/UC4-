"use strict";
// exercicio-1
Object.defineProperty(exports, "__esModule", { value: true });
const FuncionarioCLT_1 = require("./exercicio-1/FuncionarioCLT");
const FuncionarioPJ_1 = require("./exercicio-1/FuncionarioPJ");
const funcionarioCLT = new FuncionarioCLT_1.FuncionarioCLT("João", 1500);
const funcionarioPJ = new FuncionarioPJ_1.FuncionarioPJ("Maria", 100, 20);
console.log(`${funcionarioCLT.nome}  Salário: R$${funcionarioCLT.calcularSalario()}`);
console.log(`${funcionarioPJ.nome}  Salário: R$${funcionarioPJ.calcularSalario()}`);
console.log("\n---------------------------------------------------\n");
const Retangulo_1 = require("./exercicio-2/Retangulo");
const Triangulo_1 = require("./exercicio-2/Triangulo");
const formas = [
    new Retangulo_1.Retangulo(10, 5),
    new Triangulo_1.Triangulo(8, 6),
    new Retangulo_1.Retangulo(7, 3),
    new Triangulo_1.Triangulo(5, 4),
];
formas.forEach((forma, index) => {
    console.log(`Forma ${index + 1}: Área = ${forma.calcularArea()}`);
});
console.log("\n---------------------------------------------------\n");
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
