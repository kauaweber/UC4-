import { SistemaLogin } from "./SistemaLogin";

const sistema = new SistemaLogin();

console.log(sistema.autenticar("admin", "1234")); // true
console.log(sistema.autenticar("user", "1234"));  // false
console.log(sistema.autenticar("admin", "wrong")); // false