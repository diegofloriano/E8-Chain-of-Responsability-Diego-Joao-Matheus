// Abstract Factory para criação de produtos da sorveteria

import { Sorvete } from "../models/produtos/Sorvete";
import { Picole } from "../models/produtos/Picole";
import { MilkShake } from "../models/produtos/MilkShake";
import { Acai } from "../models/produtos/Acai";
import { Forma } from "../models/produtos/Forma";

/**
 * Interface para fábrica abstrata de produtos.
 * Permite criar diferentes tipos de produtos de forma padronizada.
 */
export interface ProdutoAbstractFactory {
    criarSorvete(
        valor: number,
        peso: number,
        quantidade: number,
        forma: Forma,
        talher: boolean,
        nBolas: number,
        sabores: string[],
        cobertura: string
    ): Sorvete;

    criarPicole(
        valor: number,
        peso: number,
        quantidade: number,
        forma: Forma,
        sabor: string
    ): Picole;

    criarMilkShake(
        valor: number,
        peso: number,
        quantidade: number,
        forma: Forma,
        sabor: string
    ): MilkShake;

    criarAcai(
        valor: number,
        peso: number,
        quantidade: number,
        forma: Forma,
        complemento: string[],
        talher: boolean
    ): Acai;
}
