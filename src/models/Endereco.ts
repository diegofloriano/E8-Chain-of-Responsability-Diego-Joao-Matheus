export class Endereco {
    constructor(
        public id: number | undefined, // Opcional para criação
        public rua: string,
        public numero: number,
        public cidade: string,
        public estado: string,
        public cep: string
    ) { }
}