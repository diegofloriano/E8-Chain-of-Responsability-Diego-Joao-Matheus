import { NomeValidator } from "./NomeValidator";
import { SenhaValidator } from "./SenhaValidator";
import { DataValidator } from "./DataValidator";
import { HoraValidator } from "./HoraValidator";
import { CodigoValidator } from "./CodigoValidator";

export class ValidadorAcesso {
  static validar(request: any): string {
    const nomeValidador = new NomeValidator();
    const senhaValidador = new SenhaValidator();
    const dataValidador = new DataValidator();
    const horaValidador = new HoraValidator();
    const codigoValidador = new CodigoValidator();

    nomeValidador
      .setNext(senhaValidador)
      .setNext(dataValidador)
      .setNext(horaValidador)
      .setNext(codigoValidador);

    return nomeValidador.handle(request) || "Acesso autorizado.";
  }
}
