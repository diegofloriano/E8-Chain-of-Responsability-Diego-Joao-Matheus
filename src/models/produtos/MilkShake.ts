import { ProdutoBase } from "./Produto";
import { Forma } from "./Forma";

export class MilkShake extends ProdutoBase {
    constructor(
        valor: number,
        peso: number,
        quantidade: number,
        forma: Forma,
        public sabor: string
    ) {
        super(valor, peso, quantidade, forma);
    }

    getDescricao(): string {
        return `MilkShake (${this.forma}), sabor: ${this.sabor}`;
    }
}
