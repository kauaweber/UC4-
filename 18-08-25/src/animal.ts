export class animal {
    protected name: string
    protected weight: number

    constructor(name: string, weigth: number) {
        this.name = name
        this.weight = weigth
    }

    eat(): void{
        console.log(`${this.name} is eating.`)
    }
}