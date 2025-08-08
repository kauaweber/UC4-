"use strict";
// for (let voltas:number = 0; voltas < 10; voltas ++) {
//     console.log(`O ciclista deu ${voltas} voltas.`)
// } 
// console.log("o ciclista venceu a corrida!")
// ENQUANTO
// let voltas:number = 0 
// while (voltas <= 10){
//     console.log(`O ciclista deu ${voltas} voltas.`)
//     voltas ++
// }
// const numeros:number[] = [10,20,30,40,50,60]
// for (let i:number = 0; i < numeros.length; i++){
//     console.log("Numeros: " + numeros[i])
// }
// Para cada item do meu array
// Para cada numero dentro do array numeros 
// Faça algo
// NAO FUNCIONA COM OBJETOS!
// for (let numero of numeros){
//     console.log("Numero: " + numero)
// }
// const pessoa : {nome:string, idade:number} = {
//     nome:"Kaua",
//     idade: 15
// }
// for (let chave in pessoa) {
//     console.log(`{chave}: ${pessoa[chave as keyof typeof pessoa]}`)
// }
// typeof descobre o tipo de algo
// keyof pega as chaves de um objeto (exemplo: nome, idade)
// keyof typeof pessoa primeiro descobre o tipo do objeto, depois pega as chaves dele.
// forEach
const personagens = ['Frodo', 'Gandal', 'Legolas'];
// o ForEach é usado em arrays
// ele server para executar uma funçao para cada item deste array
// essa funçao é chamada como paramentro de forEach (callback)
// o primeiro paramentro dessa funçao é o valor do item, e o segundo é o seu indice
// personagens.forEach((nome, indice)=>{
//     console.log(`Personagem ${indice}: ${nome}`)
// })
// let contador = 0;
// //do significa faça
// do {
//     console.log(`Contador: ${contador}`);
//     contador ++;
// }while (contador < 0);
// Senhor dos Anéis
const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];
for (let i = 0; i < sociedade.length; i++) {
    for (let j = 0; j < hobbits.length; j++) {
        if (hobbits[j].includes(sociedade[i])) {
            console.log(`Hobbit encontrado: ${sociedade[i]}`);
        }
    }
}
// Star Wars
const personagensSW = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];
for (const personagem of personagensSW) {
    if (personagem.jedi) {
        console.log(`Jedi encontrado: ${personagem.nome}`);
    }
}
// naruto
const personagensNaruto = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake',
};
for (const personagem in personagensNaruto) {
    // Garantir que a chave pertence ao objeto
    if (Object.prototype.hasOwnProperty.call(personagensNaruto, personagem)) {
        console.log(`${personagem} pertence ao clã ${personagensNaruto[personagem]}`);
    }
}
// dragon ball
const personagensDB = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
];
personagensDB.forEach(personagem => {
    if (personagem.poder > 8000) {
        console.log(`O poder de ${personagem.nome} é de mais de 8000!`);
    }
});
// pokemon
const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let i = 0;
while (i < pokemons.length) {
    console.log(`Capturando ${pokemons[i]}`);
    if (pokemons[i] === 'Mewtwo') {
        console.log('Pokémon lendário encontrado: Mewtwo!');
        break;
    }
    i++;
}
// senhor dos aneis 2
let passos = 0;
const passosParaMordor = 5;
do {
    passos++;
    console.log(`Dando passo ${passos} em direção a Mordor...`);
} while (passos < passosParaMordor);
console.log('Chegamos a Mordor!');
