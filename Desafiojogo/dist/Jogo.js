"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
const readline = __importStar(require("readline-sync"));
class Jogo {
    constructor() {
        this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
        this.tentativas = 0;
    }
    jogar() {
        console.log("🎮 Bem-vindo ao jogo de adivinhar o número!");
        console.log("Tente adivinhar um número entre 1 e 100.");
        let acertou = false;
        while (!acertou) {
            const palpite = readline.questionInt("Digite seu palpite: ");
            this.tentativas++;
            if (palpite === this.numeroSecreto) {
                console.log(`🎉 Parabéns! Você acertou em ${this.tentativas} tentativas!`);
                acertou = true;
            }
            else if (palpite < this.numeroSecreto) {
                console.log("🔼 O número é MAIOR.");
            }
            else {
                console.log("🔽 O número secreto é MENOR.");
            }
        }
    }
}
exports.Jogo = Jogo;
