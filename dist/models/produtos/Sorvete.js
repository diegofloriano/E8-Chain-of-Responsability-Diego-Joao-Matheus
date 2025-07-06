"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorvete = void 0;
const Produto_1 = require("./Produto");
class Sorvete extends Produto_1.ProdutoBase {
    constructor(valor, peso, quantidade, forma, talher, nBolas, sabores, cobertura) {
        super(valor, peso, quantidade, forma);
        this.talher = talher;
        this.nBolas = nBolas;
        this.sabores = sabores;
        this.cobertura = cobertura;
    }
    getDescricao() {
        return `Sorvete (${this.forma})${this.talher ? " talher" : ""}, ${this.nBolas} bolas, sabores: ${this.sabores.join(", ")}, cobertura: ${this.cobertura}`;
    }
}
exports.Sorvete = Sorvete;
