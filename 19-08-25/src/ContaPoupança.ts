import ContaBancaria from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
  aplicarJuros(taxa: number): void {
    let juros = this.saldo * taxa;
    this.atualizarSaldo(juros);
    console.log(`Juros de ${juros} aplicados com sucesso!`);
  }
}

export default ContaPoupanca;
