"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaPoupan_a_js_1 = require("./ContaPoupan\u00E7a.js");
const Guerreiro_js_1 = require("./Guerreiro.js");
const Veiculo_js_1 = require("./Veiculo.js");
const heroi = new Guerreiro_js_1.Guerreiro(100);
const vilao = new Guerreiro_js_1.Guerreiro(80);
heroi.atacar(vilao); // Atacando outro personagem (usa método público que chama protected)
heroi.treinar(); // Acessando protected na própria instância
console.log("\n");
const Carro = new Veiculo_js_1.Veiculo(60);
console.log(`Velocidade inicial: ${Carro.getVelocidade()} km/h`);
Carro.acelerar();
Carro.acelerar();
Carro.acelerar();
Carro.acelerar();
console.log(`Velocidade do carro: ${Carro.getVelocidade()} km/h`);
console.log("\n");
const conta = new ContaPoupan_a_js_1.ContaPoupanca(1000);
conta.aplicarJuros(0.05);
console.log(`Saldo atual: ${conta['saldo']}`);
