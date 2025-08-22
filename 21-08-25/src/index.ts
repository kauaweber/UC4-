// import { Animal } from "./Animal";
// import { Cachorro } from "./Cachorro";
// import { Gato } from "./Gato"; 



// const meuAnimal:Cachorro = new Cachorro();
// const meuGato:Gato = new Gato();

// meuGato.falar();
// meuAnimal.falar();

// 1
import { Bicicleta } from "./Bicicleta";
import { Carro } from "./Carro";

const meuCarro: Carro = new Carro();
const minhaBicicleta: Bicicleta = new Bicicleta();

const veiculos = [meuCarro, minhaBicicleta];

for (const veiculo of veiculos) {
  veiculo.mover();
}
console.log("\n-------------------\n");


// 2
import { CartaoCredito } from "./CartaoCredito";
import { Boleto } from "./Boleto"; 

const meuCartaoCredito: CartaoCredito = new CartaoCredito();
const meuBoleto: Boleto = new Boleto();

const Pagamento = [ meuCartaoCredito, meuBoleto];
for (const pagamento of Pagamento) {
  pagamento.processar();
}