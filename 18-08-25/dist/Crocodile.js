"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodile = void 0;
const animal_js_1 = require("./animal.js");
class Crocodile extends animal_js_1.animal {
    constructor(name, weight) {
        super(name, weight);
    }
    swim() {
        console.log(`${this.name} is swimming`);
    }
}
exports.Crocodile = Crocodile;
