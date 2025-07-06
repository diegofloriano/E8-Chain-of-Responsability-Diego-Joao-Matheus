"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(id, // Opcional para criação
    rua, numero, cidade, estado, cep) {
        this.id = id;
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
}
exports.Endereco = Endereco;
