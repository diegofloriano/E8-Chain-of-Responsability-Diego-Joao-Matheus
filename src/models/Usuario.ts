import { Endereco } from "./Endereco";
import { FormaPagamento } from "./pagamentos/FormaPagamento";

export class Usuario {
    constructor(
        public id: number,
        public nome: string,
        public cpf: string,
        public dtNascimento: string,
        public endereco: Endereco,
        public formaPagamento: FormaPagamento
    ) { }
}