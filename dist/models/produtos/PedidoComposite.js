"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoComposite = void 0;
class PedidoComposite {
    constructor() {
        this.items = [];
    }
    adicionarItem(produto) {
        this.items.push(produto);
    }
    removerItem(index) {
        this.items.splice(index, 1);
    }
    getDescricao() {
        return this.items.map((item, index) => `Item ${index + 1}: ${item.getDescricao()}`).join('\n');
    }
    getValor() {
        return this.items.reduce((total, item) => total + item.getValor(), 0);
    }
    getItens() {
        return [...this.items];
    }
}
exports.PedidoComposite = PedidoComposite;
