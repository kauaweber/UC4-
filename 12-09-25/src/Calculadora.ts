export class Calculadora {

    // Aqui crio as ASSINATURAS DE METODOS
    // Ou seja, defino COMO Este metodo poder ser chamado
    somar(a: number, b: number): void;   // assina que pode receber dois números
    somar(a: string, b: string): void;   // assina que pode receber duas strings

    // Aqui crio a IMPLEMENTAÇÃO DO METODO
    // Ou seja, DEFINO sua logica
    somar(a: any, b: any): any {
        console.log(a + b);
    } 

}  