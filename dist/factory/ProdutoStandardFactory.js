"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoStandardFactory = void 0;
const Sorvete_1 = require("../models/produtos/Sorvete");
const Picole_1 = require("../models/produtos/Picole");
const MilkShake_1 = require("../models/produtos/MilkShake");
const Acai_1 = require("../models/produtos/Acai");
class ProdutoStandardFactory {
    criarSorvete(valor, peso, quantidade, forma, talher, nBolas, sabores, cobertura) {
        return new Sorvete_1.Sorvete(valor, peso, quantidade, forma, talher, nBolas, sabores, cobertura);
    }
    criarPicole(valor, peso, quantidade, forma, sabor) {
        return new Picole_1.Picole(valor, peso, quantidade, forma, sabor);
    }
    criarMilkShake(valor, peso, quantidade, forma, sabor) {
        return new MilkShake_1.MilkShake(valor, peso, quantidade, forma, sabor);
    }
    criarAcai(valor, peso, quantidade, forma, complemento, talher) {
        return new Acai_1.Acai(valor, peso, quantidade, forma, complemento, talher);
    }
}
exports.ProdutoStandardFactory = ProdutoStandardFactory;
