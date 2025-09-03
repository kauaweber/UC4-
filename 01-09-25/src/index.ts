// exercicio-1

import { FuncionarioCLT } from "./exercicio-1/FuncionarioCLT";
import { FuncionarioPJ } from "./exercicio-1/FuncionarioPJ";

const funcionarioCLT = new FuncionarioCLT("João", 1500);
const funcionarioPJ = new FuncionarioPJ("Maria", 100, 20);

console.log(`${funcionarioCLT.nome}  Salário: R$${funcionarioCLT.calcularSalario()}`); 
console.log(`${funcionarioPJ.nome}  Salário: R$${funcionarioPJ.calcularSalario()}`); 

console.log("\n---------------------------------------------------\n");

// exercicio-2

import { Forma} from "./exercicio-2/Forma";
import { Retangulo } from "./exercicio-2/Retangulo";
import { Triangulo } from "./exercicio-2/Triangulo";

const formas: Forma[] = [
    new Retangulo(10, 5),
    new Triangulo(8, 6),
    new Retangulo(7, 3),
    new Triangulo(5, 4),
];

formas.forEach((forma, index) => {
    console.log(`Forma ${index + 1}: Área = ${forma.calcularArea()}`);
});

console.log("\n---------------------------------------------------\n");

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