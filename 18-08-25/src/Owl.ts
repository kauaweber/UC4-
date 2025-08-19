import { animal } from "./animal";

export class Owl extends animal {
    
    constructor(name: string, weight: number) {
        super(name, weight)
    }
    fly(): void {
        console.log(`${this.name} is flying`)
    }

}