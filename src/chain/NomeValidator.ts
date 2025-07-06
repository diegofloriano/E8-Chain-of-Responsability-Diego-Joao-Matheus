import { Handler } from "./Handler";
  
  export class NomeValidator implements Handler {
    private nextHandler: Handler | null = null;
  
    setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }
  
    handle(request: any): string | null {
      const nome = request.nome;
      if (!nome || typeof nome !== 'string' || nome.length < 3 || /\d/.test(nome)) {
        return "Nome inválido. Deve conter pelo menos 3 letras e não pode ter números.";
      }
      return this.nextHandler?.handle(request) ?? null;
    }
  }