"use strict";
// import { Animal } from "./Animal";
// import { Cachorro } from "./Cachorro";
// import { Gato } from "./Gato"; 
Object.defineProperty(exports, "__esModule", { value: true });
// const meuAnimal:Cachorro = new Cachorro();
// const meuGato:Gato = new Gato();
// meuGato.falar();
// meuAnimal.falar();
const Bicicleta_1 = require("./Bicicleta");
const Carro_1 = require("./Carro");
const meuCarro = new Carro_1.Carro();
const minhaBicicleta = new Bicicleta_1.Bicicleta();
const veiculos = [meuCarro, minhaBicicleta];
for (const veiculo of veiculos) {
    veiculo.mover();
}
console.log("\n-------------------\n");
const CartaoCredito_1 = require("./CartaoCredito");
const Boleto_1 = require("./Boleto");
const meuCartaoCredito = new CartaoCredito_1.CartaoCredito();
const meuBoleto = new Boleto_1.Boleto();
const Pagamento = [meuCartaoCredito, meuBoleto];
for (const pagamento of Pagamento) {
    pagamento.processar();
}
