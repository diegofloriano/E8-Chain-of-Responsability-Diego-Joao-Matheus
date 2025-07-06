"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(id, usuario, produtos, data) {
        this.id = id;
        this.usuario = usuario;
        this.produtos = produtos;
        this.data = data;
    }
}
exports.Pedido = Pedido;
