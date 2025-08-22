import { Veiculo } from './Veiculo.js'

export class Carro extends Veiculo {
    mover(): void {
        console.log('O carro está se movendo!')
    }
}