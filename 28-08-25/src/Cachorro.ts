

export class Cachorro implements IAnimal {
    nome: string
    raca: string 
    
    constructor(nome: string, raca: string) {
        this.nome = nome
        this.raca = nome
    }


    emitirSom(): void {
        console.log("Au Au");   
    }
   
}