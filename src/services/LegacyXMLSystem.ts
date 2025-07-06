import { Usuario } from "../models/Usuario";
import { Endereco } from "../models/Endereco";
import { Credito } from "../models/pagamentos/Credito";
import { Debito } from "../models/pagamentos/Debito";
import { Pix } from "../models/pagamentos/Pix";

export interface XMLService {
    processarCadastro(xmlData: string): Usuario;
}

export class LegacyXMLSystem implements XMLService {
    processarCadastro(xmlData: string): Usuario {
        try {
            const idMatch = xmlData.match(/<id>(\d+)<\/id>/);
            const nomeMatch = xmlData.match(/<nome>(.*?)<\/nome>/);
            const cpfMatch = xmlData.match(/<cpf>(.*?)<\/cpf>/);
            const dtNascimentoMatch = xmlData.match(/<dtNascimento>(.*?)<\/dtNascimento>/);

            // Extração dos campos do endereço
            const ruaMatch = xmlData.match(/<rua>(.*?)<\/rua>/);
            const numeroMatch = xmlData.match(/<numero>(.*?)<\/numero>/);
            const cidadeMatch = xmlData.match(/<cidade>(.*?)<\/cidade>/);
            const estadoMatch = xmlData.match(/<estado>(.*?)<\/estado>/);
            const cepMatch = xmlData.match(/<cep>(.*?)<\/cep>/);

            // Extração da forma de pagamento
            const formaPagamentoMatch = xmlData.match(/<formaPagamento tipo="(.*?)"/);

            if (!idMatch || !nomeMatch || !cpfMatch || !dtNascimentoMatch) {
                throw new Error("XML inválido");
            }

            const endereco = new Endereco(
                undefined,
                ruaMatch ? ruaMatch[1] : "",
                numeroMatch ? parseInt(numeroMatch[1]) : 0,
                cidadeMatch ? cidadeMatch[1] : "",
                estadoMatch ? estadoMatch[1] : "",
                cepMatch ? cepMatch[1] : ""
            );

            // Forma de pagamento dinâmica
            let formaPagamento;
            switch (formaPagamentoMatch ? formaPagamentoMatch[1] : "credito") {
                case "debito":
                    formaPagamento = new Debito();
                    break;
                case "pix":
                    formaPagamento = new Pix();
                    break;
                default:
                    formaPagamento = new Credito();
            }

            return new Usuario(
                parseInt(idMatch[1]),
                nomeMatch[1],
                cpfMatch[1],
                dtNascimentoMatch[1],
                endereco,
                formaPagamento
            );
        } catch (error) {
            throw new Error(`Falha ao processar XML: ${(error as Error).message}`);
        }
    }
}