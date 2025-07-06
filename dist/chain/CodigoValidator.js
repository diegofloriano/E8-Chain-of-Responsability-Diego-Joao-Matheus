"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodigoValidator = void 0;
class CodigoValidator {
    constructor() {
        this.nextHandler = null;
        this.codigosValidos = ["ABC123", "XYZ789", "VAL001"];
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        var _a, _b;
        if (!this.codigosValidos.includes(request.codigo)) {
            return "Código de acesso inválido.";
        }
        return (_b = (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.handle(request)) !== null && _b !== void 0 ? _b : null;
    }
}
exports.CodigoValidator = CodigoValidator;
