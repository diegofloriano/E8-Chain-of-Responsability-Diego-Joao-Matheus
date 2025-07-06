import { Handler } from "./Handler";

export class SenhaValidator implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: any): string | null {
    const senha = request.senha;
    if (!senha || senha.length < 6 || !/[0-9]/.test(senha) || !/[^a-zA-Z0-9]/.test(senha)) {
      return "Senha inválida. Deve ter pelo menos 6 caracteres, 1 número e 1 caractere especial.";
    }
    return this.nextHandler?.handle(request) ?? null;
  }
}