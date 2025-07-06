import { ProdutoBase } from "./Produto";
import { Forma } from "./Forma";

export class Sorvete extends ProdutoBase {
    constructor(
        valor: number,
        peso: number,
        quantidade: number,
        forma: Forma,
        public talher: boolean,
        public nBolas: number,
        public sabores: string[],
        public cobertura: string
    ) {
        super(valor, peso, quantidade, forma);
    }

    getDescricao(): string {
        return `Sorvete (${this.forma})${this.talher ? " talher" : ""}, ${this.nBolas} bolas, sabores: ${this.sabores.join(", ")}, cobertura: ${this.cobertura}`;
    }
}
