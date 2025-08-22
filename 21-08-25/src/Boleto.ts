import { Pagamento } from './Pagamento';

export class Boleto extends Pagamento {
    processar(): void {
        console.log('Processando pagamento com boleto...');
    }
}