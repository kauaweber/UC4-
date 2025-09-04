import fs from 'fs';
import path from 'path';
import readlineSync from 'readline-sync';

// Função principal que irá criar o projeto
function createTsProject(): void {
 
    // Passo 1: Pergunta o nome do projeto
const projectName: string = readlineSync.question("Digite o nome do projeto: ");

// Validação simples: não pode ser vazio
if (!projectName) {
  console.log("❌ Nome do projeto não pode ser vazio!");
  return; // encerra a função se o usuário não digitou nada
}

// Caminho da pasta que será criada "uma acima" da pasta atual
const projectPath: string = path.join("..", projectName);

// Cria a pasta do projeto, recursive:true garante criação de pastas intermediárias
fs.mkdirSync(projectPath, { recursive: true });

}
createTsProject()
