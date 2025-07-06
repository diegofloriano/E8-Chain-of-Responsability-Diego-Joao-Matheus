"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picole = void 0;
const Produto_1 = require("./Produto");
class Picole extends Produto_1.ProdutoBase {
    constructor(valor, peso, quantidade, forma, sabor) {
        super(valor, peso, quantidade, forma);
        this.sabor = sabor;
    }
    getDescricao() {
        return `Picolé (${this.forma}), sabor: ${this.sabor}`;
    }
}
exports.Picole = Picole;
