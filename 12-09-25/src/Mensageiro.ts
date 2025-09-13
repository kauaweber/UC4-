export class Mensageiro {
    // Pode mandar mensagem para uma pessoa
    enviar(destinatario: string, mensagem: string): void;
    // Ou pode mandar para várias pessoas ao mesmo tempo
    enviar(destinatarios: string[], mensagem: string): void;
  
    enviar(dest: any, mensagem: string): void {
      if (Array.isArray(dest)) {
        console.log("Enviando para vários:", dest.join(", "));
      } else {
        console.log("Enviando para:", dest);
      }
      console.log("Mensagem:", mensagem);
    }
  }
  
  // 👇 Testando
  const m = new Mensageiro();
  
  m.enviar("Ana", "Oi, tudo bem?");  
  // Enviando para: Ana
  // Mensagem: Oi, tudo bem?
  
  m.enviar(["João", "Maria"], "Bom dia, galera!");
  // Enviando para vários: João, Maria
  // Mensagem: Bom dia, galera!