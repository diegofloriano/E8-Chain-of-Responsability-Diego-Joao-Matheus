"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenhaValidator = void 0;
class SenhaValidator {
    constructor() {
        this.nextHandler = null;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        var _a, _b;
        const senha = request.senha;
        if (!senha || senha.length < 6 || !/[0-9]/.test(senha) || !/[^a-zA-Z0-9]/.test(senha)) {
            return "Senha inválida. Deve ter pelo menos 6 caracteres, 1 número e 1 caractere especial.";
        }
        return (_b = (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.handle(request)) !== null && _b !== void 0 ? _b : null;
    }
}
exports.SenhaValidator = SenhaValidator;
