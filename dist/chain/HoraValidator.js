"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoraValidator = void 0;
class HoraValidator {
    constructor() {
        this.nextHandler = null;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        var _a, _b;
        const horaRegex = /^([01]?\d|2[0-3]):([0-5]\d)$/;
        if (!horaRegex.test(request.hora)) {
            return "Hora inválida. Formato esperado HH:mm.";
        }
        return (_b = (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.handle(request)) !== null && _b !== void 0 ? _b : null;
    }
}
exports.HoraValidator = HoraValidator;
