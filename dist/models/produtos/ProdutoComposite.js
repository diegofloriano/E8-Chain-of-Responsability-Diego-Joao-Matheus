"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoComposite = void 0;
class ProdutoComposite {
    constructor() {
        this.produtos = [];
    }
    add(produto) {
        this.produtos.push(produto);
    }
    getDescricao() {
        return this.produtos.map(p => p.getDescricao()).join(" + ");
    }
    getValor() {
        return this.produtos.reduce((total, p) => total + p.getValor(), 0);
    }
}
exports.ProdutoComposite = ProdutoComposite;
