"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casquinha = void 0;
const Produto_1 = require("./Produto");
class Casquinha extends Produto_1.ProdutoBase {
    constructor(valor, peso, quantidade, forma, talher, recheio, cobertura) {
        super(valor, peso, quantidade, forma);
        this.talher = talher;
        this.recheio = recheio;
        this.cobertura = cobertura;
    }
    getDescricao() {
        return `Casquinha (${this.forma})${this.talher ? " talher" : ""}${this.recheio ? ", com recheio" : ""}, cobertura: ${this.cobertura}`;
    }
}
exports.Casquinha = Casquinha;
