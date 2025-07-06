import { Handler } from "./Handler";

export class DataValidator implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

handle(request: any): string | null {
    // Parse manual dos componentes da data
    const [ano, mes, dia] = request.data.split('-').map(Number);
    const data = new Date(ano, mes - 1, dia); // mês começa em 0

    const hojeNow = new Date();
    const hoje = new Date(hojeNow.getFullYear(), hojeNow.getMonth(), hojeNow.getDate());

    if (
        isNaN(data.getTime()) ||
        data < hoje
    ) {
        return "Data inválida ou anterior à atual.";
    }
    return this.nextHandler?.handle(request) ?? null;
}
}