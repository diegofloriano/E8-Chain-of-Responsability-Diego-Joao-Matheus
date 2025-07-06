"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkShake = void 0;
const Produto_1 = require("./Produto");
class MilkShake extends Produto_1.ProdutoBase {
    constructor(valor, peso, quantidade, forma, sabor) {
        super(valor, peso, quantidade, forma);
        this.sabor = sabor;
    }
    getDescricao() {
        return `MilkShake (${this.forma}), sabor: ${this.sabor}`;
    }
}
exports.MilkShake = MilkShake;
