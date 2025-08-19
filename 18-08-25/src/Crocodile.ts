import { animal } from './animal.js';

export class Crocodile extends animal {

    constructor(name: string, weight: number) {
        super(name, weight)
    }
    swim(): void {
        console.log(`${this.name} is swimming`)
    }
}
