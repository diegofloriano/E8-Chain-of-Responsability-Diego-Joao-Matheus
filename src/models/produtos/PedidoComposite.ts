import { Produto } from "./Produto";

export class PedidoComposite implements Produto {
    private items: Produto[] = [];

    adicionarItem(produto: Produto): void {
        this.items.push(produto);
    }

    removerItem(index: number): void {
        this.items.splice(index, 1);
    }

    getDescricao(): string {
        return this.items.map((item, index) =>
            `Item ${index + 1}: ${item.getDescricao()}`
        ).join('\n');
    }

    getValor(): number {
        return this.items.reduce((total, item) => total + item.getValor(), 0);
    }

    getItens(): Produto[] {
        return [...this.items];
    }
}
