import { Usuario } from "./Usuario";
import { Produto } from "./produtos/Produto";

export class Pedido {
    constructor(
        public id: number,
        public usuario: Usuario,
        public produtos: Produto[],
        public data: Date
    ) { }
}
