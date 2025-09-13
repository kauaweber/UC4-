export class Desenhista {
    // Pode desenhar um círculo passando só o raio
    desenhar(raio: number): void;
    // Ou pode desenhar um retângulo passando largura e altura
    desenhar(largura: number, altura: number): void;
  
    desenhar(a: number, b?: number): void {
      if (b === undefined) {
        console.log(`Desenhando um círculo de raio ${a}`);
      } else {
        console.log(`Desenhando um retângulo de ${a}x${b}`);
      }
    }
  }
  
  // 👇 Testando
  const d = new Desenhista();
  
  d.desenhar(10);       // Desenhando um círculo de raio 10
  d.desenhar(20, 30);   // Desenhando um retângulo de 20x30