"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_js_1 = require("./Cachorro.js");
// Para podermos criar um objeto da nossa classe 'Cachorro', primeiro criamos uma variavel que deve ser i tipo Cachorro
// Depois, atribuimos valor a esta variavel usando a palavra reservada 'new' seguida do nome da classe junto de parênteses, passar TODOS os valores que nos definimos
// Quando cruamos um objeto, chamamos isso de INSTANCIAR O OBJETO DA CLASSE
const meuCachorro = new Cachorro_js_1.Cachorro("Rex", 5, "Labrador");
const meuOutroCachorro = new Cachorro_js_1.Cachorro("Bob", 3, "Vira-Lata");
// Para chamarmos os metodos destez objetos, chamamos o nome da variavel + . + o nome do metodo + ()
meuCachorro.correr();
meuCachorro.latir();
meuOutroCachorro.correr();
meuOutroCachorro.latir();
// Para acessarmos o valor do atributo de um objeto, chamamos o nome da variavel + . + o nome do atributo
console.log(meuOutroCachorro.years);
// Para trocarmos o valor do atributo de um objeto, chamamos o nome da variavel + . + i o nome do atributo + = + o novo valor
meuCachorro.name = "Rexy";
console.log(meuCachorro.name);
// ATIVIDADE - CALCULADORA
const Calculadora_1 = require("./Calculadora");
const calculadora = new Calculadora_1.Calculadora(10, 5);
console.log("Soma:", calculadora.somar());
console.log("Subtração:", calculadora.subtrair());
console.log("Multiplicação:", calculadora.multiplicar());
try {
    console.log("Divisão:", calculadora.dividir());
}
catch (error) {
    console.error(error.message);
}
