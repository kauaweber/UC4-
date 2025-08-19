"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owl = void 0;
const animal_1 = require("./animal");
class Owl extends animal_1.animal {
    constructor(name, weight) {
        super(name, weight);
    }
    fly() {
        console.log(`${this.name} is flying`);
    }
}
exports.Owl = Owl;
