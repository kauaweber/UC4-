import { FuncionarioCLT } from "./ex1/FuncionarioCLT";
import { FuncionarioPJ } from "./ex1/FuncionarioPJ";
import { Funcionario } from "./ex1/Funcionario";
// exercicio-1
const funcionarios: Funcionario[] = [
    new FuncionarioCLT("João"),
    new FuncionarioPJ("Maria"),
]
funcionarios.forEach((funcionario) => {
    console.log(`Funcionário: ${funcionario.getNome()}, Salário: R$${funcionario.calcularSalario()}`);
});

console.log("\n---------------------------------------------------\n");
// exercicio-2

import { Forma } from "./ex2/Forma";
import { Retangulo } from "./ex2/Retangulo";
import { Triangulo } from "./ex2/Triangulo";

const formas: Forma[] = [
    new Retangulo(),
    new Triangulo()
];

formas.forEach((forma) => {
    console.log(`Forma: ${forma.name}, Área: ${forma.calcularArea(3, 5)}`);
});

// Desafio 

import { Cliente } from "./Desafio/Cliente";
import { Administrador } from "./Desafio/Administrador";
import { IAutenticavel } from "./Desafio/IAutenticavel";

function login(usuario: IAutenticavel, nomeUsuario: string, senha: string) {
    if (usuario.autenticar(nomeUsuario, senha)) {
        usuario.acessarSistema();
    } else {
        console.log("Falha na autenticação.");
    }
}

const admin = new Administrador("Carlos", "adminUser", "adminPass");
const cliente = new Cliente("Ana", "clientUser", "clientPass");

console.log("Tentativa de login como administrador:");
login(admin, "admin", "1234");

console.log("\nTentativa de login como cliente:");
login(cliente, "cliente", "abcd");

console.log("\nTentativa de login com credenciais inválidas:");
login(cliente, "cliente", "senhaErrada");

console.log("\n---------------------------------------------------\n");

// exercicio Clas de Konoha

import { ClanUchiha } from "./exercicioClãsdeKonoha/ClaUchiha";
import { ClanHyuuga } from "./exercicioClãsdeKonoha/ClaHyuuga";
import { ClanNara } from "./exercicioClãsdeKonoha/ClaNara";
import { ClanAkimichi } from "./exercicioClãsdeKonoha/ClaAkimichi";

console.log("Exibindo detalhes dos clãs de Konoha:");

const clans = [
    new ClanUchiha("Sasuke Uchiha"),
    new ClanHyuuga("Neji Hyuuga"),
    new ClanNara("Shikamaru Nara"),
    new ClanAkimichi("Choji Akimichi"),
];
clans.forEach((clan) => {
    clan.exibirDetalhes();
    clan.habilidadeEspecial();
    console.log("--------------------");
});