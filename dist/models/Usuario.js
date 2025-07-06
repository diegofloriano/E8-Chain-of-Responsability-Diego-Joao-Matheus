"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, nome, cpf, dtNascimento, endereco, formaPagamento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dtNascimento = dtNascimento;
        this.endereco = endereco;
        this.formaPagamento = formaPagamento;
    }
}
exports.Usuario = Usuario;
