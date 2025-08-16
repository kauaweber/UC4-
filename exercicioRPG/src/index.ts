console.log(`

n                                                                 :.
E%                                                                :"5
z  %                                                              :" 
K   ":                                                           z   R
?     %.                                                       :^    J
".    ^s                                                     f     :~
 '+.    #L                                                 z"    .*
   '+     %L                                             z"    .~
     ":    '%.                                         .#     +
       ":    ^%.                                     .#    +"
         #:    "n                                  .+   .z"
           #:    ":                               z    +"
             %:    *L                           z"    z"
               *:   ^*L                       z*   .+"
                 "s   ^*L                   z#   .*"
                   #s   ^%L               z#   .*"
                     #s   ^%L           z#   .r"
                       #s   ^%.       u#   .r"
                         #i   '%.   u#   .@"
                           #s   ^%u#   .@"
                             #s x#   .*"
                              x#  .@%.
                            x#  .d"  "%.
                          xf~  .r" #s   "%.
                    u   x*  .r"     #s   "%.  x.
                    %Mu*  x*"         #m.  "%zX"
                    :R(h x*              "h..*dN.
                  u@NM5e#>                 7?dMRMh.
                z$@M@$#"#"                 *""*@MM$hL
              u@@MM8*                          "*$M@Mh.
            z$RRM8F"                             "N8@M$bL
           5RM$#                                  'R88f)R
           'h.$"                                     #$x*

| -------------------- GOBLIN HUNTER --------------------|
`)


import { Personagem } from "./personagem";
import { Monstro } from "./monstro";
import readlineSync from "readline-sync";


const nome = readlineSync.question("Digite o nome do seu personagem: ");


console.log("Escolha uma classe:");
console.log("1 - Guerreiro (Vida: 120, Forca: 25)");
console.log("2 - Mago (Vida: 80, Forca: 35)");
console.log("3 - Arqueiro (Vida: 100, Forca: 20)");

const escolhaClasse = readlineSync.question("Digite o numero da classe: ");
let classe = "";

switch (escolhaClasse) {
    case "1": classe = "Guerreiro"; break;
    case "2": classe = "Mago"; break;
    case "3": classe = "Arqueiro"; break;
    default: classe = "Guerreiro"; console.log("Classe inválida! Guerreiro selecionado por padrão.");
}


const heroi = new Personagem(nome, classe);

const goblin = new Monstro("Goblin", 80, 10);

console.log(`\n Começa a batalha!`);
console.log(`${heroi.getNome()} (${heroi.getClasse()}) VS ${goblin.getNome()}`);

while (heroi.getVida() > 0 && goblin.getVida() > 0) {
    console.log("\n--- Seu turno ---");
    console.log(`Sua vida: ${heroi.getVida()} | Vida do inimigo: ${goblin.getVida()}`);
    const escolha = readlineSync.question("O que voce quer fazer? (1) Atacar (2) Curar: ");

    if (escolha === "1") {
        heroi.atacar(goblin);
    } else if (escolha === "2") {
        heroi.curar(10);
    } else {
        console.log("Opcao invalida! Você perde o turno.");
    }

    if (goblin.getVida() <= 0) break;

    console.log("\n--- Turno do inimigo ---");
    goblin.atacar(heroi);

}

console.log("\n🏆 Fim da batalha!");

