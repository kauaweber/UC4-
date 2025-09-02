"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SistemaLogin_1 = require("./SistemaLogin");
const sistema = new SistemaLogin_1.SistemaLogin();
console.log(sistema.autenticar("admin", "1234")); // true
console.log(sistema.autenticar("user", "1234")); // false
console.log(sistema.autenticar("admin", "wrong")); // false
