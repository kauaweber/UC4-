export class animal {
    public name: string
    public weight: number

    constructor(name: string, weigth: number) {
        this.name = name
        this.weight = weigth
    }

    eat(): void{
        console.log(`${this.name} is eating.`)
    }
}