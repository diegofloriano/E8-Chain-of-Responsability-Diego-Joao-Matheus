"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyXMLSystem = void 0;
const Usuario_1 = require("../models/Usuario");
const Endereco_1 = require("../models/Endereco");
const Credito_1 = require("../models/pagamentos/Credito");
const Debito_1 = require("../models/pagamentos/Debito");
const Pix_1 = require("../models/pagamentos/Pix");
class LegacyXMLSystem {
    processarCadastro(xmlData) {
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
            const endereco = new Endereco_1.Endereco(undefined, ruaMatch ? ruaMatch[1] : "", numeroMatch ? parseInt(numeroMatch[1]) : 0, cidadeMatch ? cidadeMatch[1] : "", estadoMatch ? estadoMatch[1] : "", cepMatch ? cepMatch[1] : "");
            // Forma de pagamento dinâmica
            let formaPagamento;
            switch (formaPagamentoMatch ? formaPagamentoMatch[1] : "credito") {
                case "debito":
                    formaPagamento = new Debito_1.Debito();
                    break;
                case "pix":
                    formaPagamento = new Pix_1.Pix();
                    break;
                default:
                    formaPagamento = new Credito_1.Credito();
            }
            return new Usuario_1.Usuario(parseInt(idMatch[1]), nomeMatch[1], cpfMatch[1], dtNascimentoMatch[1], endereco, formaPagamento);
        }
        catch (error) {
            throw new Error(`Falha ao processar XML: ${error.message}`);
        }
    }
}
exports.LegacyXMLSystem = LegacyXMLSystem;
