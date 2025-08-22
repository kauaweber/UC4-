import { ContaPoupanca } from './ContaPoupança.js';
import { Guerreiro } from './Guerreiro.js';
import { Veiculo } from './Veiculo.js';

const heroi = new Guerreiro(100);
const vilao = new Guerreiro(80);

heroi.atacar(vilao);  // Atacando outro personagem (usa método público que chama protected)
heroi.treinar();       // Acessando protected na própria instância

console.log("\n")
const Carro = new Veiculo(60);
console.log(`Velocidade inicial: ${Carro.getVelocidade()} km/h`);
Carro.acelerar()
Carro.acelerar()
Carro.acelerar()
Carro.acelerar()
console.log(`Velocidade do carro: ${Carro.getVelocidade()} km/h`); 

console.log("\n")

const conta:ContaPoupanca = new ContaPoupanca(1000);


conta.aplicarJuros(0.05);

console.log(`Saldo atual: ${conta['saldo']}`); 
