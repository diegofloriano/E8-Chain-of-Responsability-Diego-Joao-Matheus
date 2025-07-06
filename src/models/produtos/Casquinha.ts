import { ProdutoBase } from "./Produto";
import { Forma } from "./Forma";

export class Casquinha extends ProdutoBase {
    constructor(
        valor: number,
        peso: number,
        quantidade: number,
        forma: Forma,
        public talher: boolean,
        public recheio: boolean,
        public cobertura: string
    ) {
        super(valor, peso, quantidade, forma);
    }

    getDescricao(): string {
        return `Casquinha (${this.forma})${this.talher ? " talher" : ""}${this.recheio ? ", com recheio" : ""}, cobertura: ${this.cobertura}`;
    }
}
