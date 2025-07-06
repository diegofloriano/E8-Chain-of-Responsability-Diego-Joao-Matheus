import { ProdutoBase } from "./Produto";
import { Forma } from "./Forma";

export class Acai extends ProdutoBase {
    constructor(
        valor: number,
        peso: number,
        quantidade: number,
        forma: Forma,
        public complemento: string[],
        public talher: boolean
    ) {
        super(valor, peso, quantidade, forma);
    }

    getDescricao(): string {
        return `Açaí (${this.forma})${this.talher ? " talher" : ""} com ${this.complemento.join(", ")}`;
    }
}
