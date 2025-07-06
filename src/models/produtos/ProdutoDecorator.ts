import { Produto } from "./Produto";

/**
 * Classe abstrata base para todos os decorators de Produto.
 */
export abstract class ProdutoDecorator implements Produto {
    constructor(protected readonly produto: Produto) { }

    abstract getDescricao(): string;

    getValor(): number {
        return this.produto.getValor();
    }
}

/**
 * Decorator para adicionar cobertura extra ao produto.
 */
export class CoberturaExtra extends ProdutoDecorator {
    constructor(
        produto: Produto,
        private readonly cobertura: string,
        private readonly valorExtra: number = 0
    ) {
        super(produto);
    }

    getDescricao(): string {
        return `${this.produto.getDescricao()} + cobertura extra: ${this.cobertura}`;
    }

    getValor(): number {
        return this.produto.getValor() + this.valorExtra;
    }
}

/**
 * Decorator para adicionar granulado ao produto.
 */
export class GranuladoDecorator extends ProdutoDecorator {
    constructor(
        produto: Produto,
        private readonly valorExtra: number = 2.0
    ) {
        super(produto);
    }

    getDescricao(): string {
        return `${this.produto.getDescricao()} + granulado`;
    }

    getValor(): number {
        return this.produto.getValor() + this.valorExtra;
    }
}

/**
 * Decorator para adicionar creme extra ao produto.
 */
export class CremeExtraDecorator extends ProdutoDecorator {
    constructor(
        produto: Produto,
        private readonly sabor: string,
        private readonly valorExtra: number = 3.0
    ) {
        super(produto);
    }

    getDescricao(): string {
        return `${this.produto.getDescricao()} + creme extra de ${this.sabor}`;
    }

    getValor(): number {
        return this.produto.getValor() + this.valorExtra;
    }
}
