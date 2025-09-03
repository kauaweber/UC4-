import { Clan } from "./Cla";

export class ClanUchiha extends Clan {
    constructor(lider: string) {
        super("Uchiha", lider);
    }
    public habilidadeEspecial(): void {
        console.log("Habilidade Especial: Sharingan");
    }
}