import { ContaUsuario } from '../models/ContaUsuario';
import { ValidadorAcesso } from "../chain/ValidadorAcesso";

export interface IValidacaoUsuarioProxy {
    acessarSistema(nome: string, senha: string, data: string, hora: string, codigo: string): any;
}

export class ValidacaoUsuarioProxy implements IValidacaoUsuarioProxy {
    private contaUsuario: ContaUsuario;
    private usuariosValidos: Map<string, string>;

    constructor(contaUsuario: ContaUsuario) {
        this.contaUsuario = contaUsuario;
        this.usuariosValidos = new Map([
            ["admin", "senha456!"],
            ["cliente", "senha123!"],
        ]);
    }

    acessarSistema(nome: string, senha: string, data: string, hora: string, codigo: string): any {
        const usuario = { nome, senha, data, hora, codigo };
        
        const resultado = ValidadorAcesso.validar({
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