export class Repositorio {
    buscar(id: number): string;
    buscar(nome: string): string[];
  
    buscar(arg: any): any {
      if (typeof arg === "number") {
        return "Usuário com id " + arg;
      } else {
        return ["Usuário1", "Usuário2"];
      }
    }
  }
  
  const r = new Repositorio();
  const u = r.buscar(1);     // retorna string
  const lista = r.buscar("a"); // retorna string[]