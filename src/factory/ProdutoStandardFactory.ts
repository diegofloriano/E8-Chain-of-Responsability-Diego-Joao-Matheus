import { ProdutoAbstractFactory } from "./ProdutoAbstractFactory";
import { Sorvete } from "../models/produtos/Sorvete";
import { Picole } from "../models/produtos/Picole";
import { MilkShake } from "../models/produtos/MilkShake";
import { Acai } from "../models/produtos/Acai";
import { Forma } from "../models/produtos/Forma";

export class ProdutoStandardFactory implements ProdutoAbstractFactory {
    criarSorvete(valor: number, peso: number, quantidade: number, forma: Forma, talher: boolean, nBolas: number, sabores: string[], cobertura: string): Sorvete {
        return new Sorvete(valor, peso, quantidade, forma, talher, nBolas, sabores, cobertura);
    }

    criarPicole(valor: number, peso: number, quantidade: number, forma: Forma, sabor: string): Picole {
        return new Picole(valor, peso, quantidade, forma, sabor);
    }

    criarMilkShake(valor: number, peso: number, quantidade: number, forma: Forma, sabor: string): MilkShake {
        return new MilkShake(valor, peso, quantidade, forma, sabor);
    }

    criarAcai(valor: number, peso: number, quantidade: number, forma: Forma, complemento: string[], talher: boolean): Acai {
        return new Acai(valor, peso, quantidade, forma, complemento, talher);
    }
}
