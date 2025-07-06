"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataValidator = void 0;
class DataValidator {
    constructor() {
        this.nextHandler = null;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        var _a, _b;
        // Parse manual dos componentes da data
        const [ano, mes, dia] = request.data.split('-').map(Number);
        const data = new Date(ano, mes - 1, dia); // mês começa em 0
        const hojeNow = new Date();
        const hoje = new Date(hojeNow.getFullYear(), hojeNow.getMonth(), hojeNow.getDate());
        if (isNaN(data.getTime()) ||
            data < hoje) {
            return "Data inválida ou anterior à atual.";
        }
        return (_b = (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.handle(request)) !== null && _b !== void 0 ? _b : null;
    }
}
exports.DataValidator = DataValidator;
