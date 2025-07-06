"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomeValidator = void 0;
class NomeValidator {
    constructor() {
        this.nextHandler = null;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        var _a, _b;
        const nome = request.nome;
        if (!nome || typeof nome !== 'string' || nome.length < 3 || /\d/.test(nome)) {
            return "Nome inválido. Deve conter pelo menos 3 letras e não pode ter números.";
        }
        return (_b = (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.handle(request)) !== null && _b !== void 0 ? _b : null;
    }
}
exports.NomeValidator = NomeValidator;
