import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
    processar(): void {
        console.log('Processando pagamento com cartão de crédito...');
    }
}