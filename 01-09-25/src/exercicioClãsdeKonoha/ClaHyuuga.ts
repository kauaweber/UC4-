import { Clan } from "./Cla";

export class ClanHyuuga extends Clan {
    constructor(lider: string) {
        super("Hyuuga", lider);
    }
    public habilidadeEspecial(): void {
        console.log("Habilidade Especial: Byakugan");
    }
}