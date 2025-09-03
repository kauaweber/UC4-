import { Clan } from "./Cla";

export class ClanNara extends Clan {
    constructor(lider: string) {
        super("Nara", lider);
    }
    public habilidadeEspecial(): void {
        console.log("Habilidade Especial: Manipulação de Sombras");
    }
}