"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorAcesso = void 0;
const NomeValidator_1 = require("./NomeValidator");
const SenhaValidator_1 = require("./SenhaValidator");
const DataValidator_1 = require("./DataValidator");
const HoraValidator_1 = require("./HoraValidator");
const CodigoValidator_1 = require("./CodigoValidator");
class ValidadorAcesso {
    static validar(request) {
        const nomeValidador = new NomeValidator_1.NomeValidator();
        const senhaValidador = new SenhaValidator_1.SenhaValidator();
        const dataValidador = new DataValidator_1.DataValidator();
        const horaValidador = new HoraValidator_1.HoraValidator();
        const codigoValidador = new CodigoValidator_1.CodigoValidator();
        nomeValidador
            .setNext(senhaValidador)
            .setNext(dataValidador)
            .setNext(horaValidador)
            .setNext(codigoValidador);
        return nomeValidador.handle(request) || "Acesso autorizado.";
    }
}
exports.ValidadorAcesso = ValidadorAcesso;
