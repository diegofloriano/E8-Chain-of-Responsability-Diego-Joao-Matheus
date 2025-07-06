import { Handler } from "./Handler";

export class CodigoValidator implements Handler {
  private nextHandler: Handler | null = null;
  private codigosValidos = ["ABC123", "XYZ789", "VAL001"];

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: any): string | null {
    if (!this.codigosValidos.includes(request.codigo)) {
      return "Código de acesso inválido.";
    }
    return this.nextHandler?.handle(request) ?? null;
  }
}