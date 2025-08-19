"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animal = void 0;
class animal {
    constructor(name, weigth) {
        this.name = name;
        this.weight = weigth;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}
exports.animal = animal;
