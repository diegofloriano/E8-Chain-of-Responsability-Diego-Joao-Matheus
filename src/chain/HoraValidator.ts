import { Handler } from "./Handler";

export class HoraValidator implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: any): string | null {
    const horaRegex = /^([01]?\d|2[0-3]):([0-5]\d)$/;
    if (!horaRegex.test(request.hora)) {
      return "Hora inválida. Formato esperado HH:mm.";
    }
    return this.nextHandler?.handle(request) ?? null;
  }
}