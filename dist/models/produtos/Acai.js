"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acai = void 0;
const Produto_1 = require("./Produto");
class Acai extends Produto_1.ProdutoBase {
    constructor(valor, peso, quantidade, forma, complemento, talher) {
        super(valor, peso, quantidade, forma);
        this.complemento = complemento;
        this.talher = talher;
    }
    getDescricao() {
        return `Açaí (${this.forma})${this.talher ? " talher" : ""} com ${this.complemento.join(", ")}`;
    }
}
exports.Acai = Acai;
