import { Forma } from "./Forma";

export interface Produto {
    getDescricao(): string;
    getValor(): number;
    // ...outros métodos se necessário...
}

export abstract class ProdutoBase implements Produto {
    constructor(
        public valor: number,
        public peso: number,
        public quantidade: number,
        public forma: Forma
    ) { }

    getValor(): number {
        return this.valor;
    }

    abstract getDescricao(): string;
}
