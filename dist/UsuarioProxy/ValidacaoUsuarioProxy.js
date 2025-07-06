"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacaoUsuarioProxy = void 0;
const ValidadorAcesso_1 = require("../chain/ValidadorAcesso");
class ValidacaoUsuarioProxy {
    constructor(contaUsuario) {
        this.contaUsuario = contaUsuario;
        this.usuariosValidos = new Map([
            ["admin", "senha456!"],
            ["cliente", "senha123!"],
        ]);
    }
    acessarSistema(nome, senha, data, hora, codigo) {
        const usuario = { nome, senha, data, hora, codigo };
        const resultado = ValidadorAcesso_1.ValidadorAcesso.validar({
            nome: usuario.nome,
            senha: usuario.senha,
            data: data,
            hora: hora,
            codigo: codigo
        });
        if (resultado !== "Acesso autorizado.") {
            throw new Error(resultado);
        }
        // Imprime os dados da conta no terminal
        console.log("Dados da conta:", this.contaUsuario);
        return {
            nome: this.contaUsuario.nome,
            tipo: this.contaUsuario.exibirTipo(),
            mensagem: "Acesso permitido. Bem-vindo ao sistema!"
        };
    }
}
exports.ValidacaoUsuarioProxy = ValidacaoUsuarioProxy;
