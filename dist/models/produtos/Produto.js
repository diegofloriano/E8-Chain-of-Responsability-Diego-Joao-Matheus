"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoBase = void 0;
class ProdutoBase {
    constructor(valor, peso, quantidade, forma) {
        this.valor = valor;
        this.peso = peso;
        this.quantidade = quantidade;
        this.forma = forma;
    }
    getValor() {
        return this.valor;
    }
}
exports.ProdutoBase = ProdutoBase;
