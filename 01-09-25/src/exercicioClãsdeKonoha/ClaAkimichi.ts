import { Clan } from "./Cla";

export class ClanAkimichi extends Clan {
    constructor(lider: string) {
        super("Akimichi", lider);
    }
    public habilidadeEspecial(): void {
        console.log("Habilidade Especial: Ampliação Corporal");
    }
}