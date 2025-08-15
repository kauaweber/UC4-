import { Entregador} from "./entregador";
import { Pacote } from "./pacote.js";

const entregador: Entregador = new Entregador("João");
const pacote: Pacote = new Pacote("Novo Hamburgo", 2.5);


entregador.entregarPacote(pacote);
entregador.trocarEndereco(pacote, "Porto Alegre");