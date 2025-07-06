import { Produto } from "./Produto";

export class ProdutoComposite implements Produto {
    private produtos: Produto[] = [];

    add(produto: Produto) {
        this.produtos.push(produto);
    }

    getDescricao(): string {
        return this.produtos.map(p => p.getDescricao()).join(" + ");
    }

    getValor(): number {
        return this.produtos.reduce((total, p) => total + p.getValor(), 0);
    }
}
