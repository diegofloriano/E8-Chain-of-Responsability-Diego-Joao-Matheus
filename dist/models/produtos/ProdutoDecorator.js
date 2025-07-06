"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CremeExtraDecorator = exports.GranuladoDecorator = exports.CoberturaExtra = exports.ProdutoDecorator = void 0;
/**
 * Classe abstrata base para todos os decorators de Produto.
 */
class ProdutoDecorator {
    constructor(produto) {
        this.produto = produto;
    }
    getValor() {
        return this.produto.getValor();
    }
}
exports.ProdutoDecorator = ProdutoDecorator;
/**
 * Decorator para adicionar cobertura extra ao produto.
 */
class CoberturaExtra extends ProdutoDecorator {
    constructor(produto, cobertura, valorExtra = 0) {
        super(produto);
        this.cobertura = cobertura;
        this.valorExtra = valorExtra;
    }
    getDescricao() {
        return `${this.produto.getDescricao()} + cobertura extra: ${this.cobertura}`;
    }
    getValor() {
        return this.produto.getValor() + this.valorExtra;
    }
}
exports.CoberturaExtra = CoberturaExtra;
/**
 * Decorator para adicionar granulado ao produto.
 */
class GranuladoDecorator extends ProdutoDecorator {
    constructor(produto, valorExtra = 2.0) {
        super(produto);
        this.valorExtra = valorExtra;
    }
    getDescricao() {
        return `${this.produto.getDescricao()} + granulado`;
    }
    getValor() {
        return this.produto.getValor() + this.valorExtra;
    }
}
exports.GranuladoDecorator = GranuladoDecorator;
/**
 * Decorator para adicionar creme extra ao produto.
 */
class CremeExtraDecorator extends ProdutoDecorator {
    constructor(produto, sabor, valorExtra = 3.0) {
        super(produto);
        this.sabor = sabor;
        this.valorExtra = valorExtra;
    }
    getDescricao() {
        return `${this.produto.getDescricao()} + creme extra de ${this.sabor}`;
    }
    getValor() {
        return this.produto.getValor() + this.valorExtra;
    }
}
exports.CremeExtraDecorator = CremeExtraDecorator;
