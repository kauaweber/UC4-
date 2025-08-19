import { Dog } from "./Dog"
import { Owl } from "./Owl"
import { Crocodile } from "./Crocodile"
import { animal } from "./animal"

const myDog:Dog = new Dog("Rex", 12)

console.log(myDog.name)

console.log(myDog.weight)

myDog.bark()
myDog.eat()

const myOwl = new Owl("Pablo", 3)

console.log(myOwl.name)
console.log(myOwl.weight)

myOwl.fly()
myOwl.eat()

const myCrocodile = new Crocodile("Croc", 200)

console.log(myCrocodile.name)
console.log(myCrocodile.weight) 

myCrocodile.swim()
myCrocodile.eat()

let animals: Array<animal> = [myDog , myOwl, myCrocodile]
animals.forEach((animal) => {
    animal.eat()
});
