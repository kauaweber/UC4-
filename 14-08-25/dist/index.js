"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entregador_1 = require("./entregador");
const pacote_js_1 = require("./pacote.js");
const entregador = new entregador_1.Entregador("João");
const pacote = new pacote_js_1.Pacote("Novo Hamburgo", 2.5);
entregador.entregarPacote(pacote);
entregador.trocarEndereco(pacote, "Porto Alegre");
