"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ContaFactory_1 = require("./factory/ContaFactory");
const Endereco_1 = require("./models/Endereco");
const ValidacaoUsuarioProxy_1 = require("./UsuarioProxy/ValidacaoUsuarioProxy");
const LegacyXMLSystem_1 = require("./services/LegacyXMLSystem");
const JsonToXMLAdapter_1 = require("./adapters/JsonToXMLAdapter");
const Credito_1 = require("./models/pagamentos/Credito");
const Debito_1 = require("./models/pagamentos/Debito");
const Pix_1 = require("./models/pagamentos/Pix");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Cadastro (simulando entrada do frontend)
app.post("/cadastro", (req, res) => {
    const legacySystem = new LegacyXMLSystem_1.LegacyXMLSystem();
    const adapter = new JsonToXMLAdapter_1.JsonToXmlAdapter(legacySystem);
    try {
        const usuarioCadastrado = adapter.processarCadastro(JSON.stringify(req.body));
        res.json({
            mensagem: "✅ Cadastro realizado com sucesso!",
            dados: {
                id: usuarioCadastrado.id,
                nome: usuarioCadastrado.nome,
                cidade: usuarioCadastrado.endereco.cidade,
                formaPagamento: usuarioCadastrado.formaPagamento.constructor.name
            }
        });
    }
    catch (error) {
        res.status(400).json({ erro: error instanceof Error ? error.message : error });
    }
});
// Teste de formas de pagamento
app.get("/testar-pagamentos", (req, res) => {
    const formas = [
        { tipo: "credito", instancia: new Credito_1.Credito() },
        { tipo: "debito", instancia: new Debito_1.Debito() },
        { tipo: "pix", instancia: new Pix_1.Pix() }
    ];
    const resultados = formas.map(forma => ({
        tipo: forma.tipo,
        resultado: forma.instancia.processarPagamento(10.50)
    }));
    res.json(resultados);
});
// Instâncias fixas para exemplo
const conta1 = ContaFactory_1.ContaFactory.criarConta('admin', 'João', 'joao@admin.com', new Endereco_1.Endereco(1, "Rua A", 123, 'São Paulo', 'SP', '01000-000'));
const conta2 = ContaFactory_1.ContaFactory.criarConta('cliente', 'Maria', 'maria@cliente.com', new Endereco_1.Endereco(2, "Rua B", 234, 'Santa Catarina', 'SC', '02000-000'));
const proxyAdmin = new ValidacaoUsuarioProxy_1.ValidacaoUsuarioProxy(conta1);
const proxyCliente = new ValidacaoUsuarioProxy_1.ValidacaoUsuarioProxy(conta2);
// Login/acesso à conta: tudo vem do front-end!
app.post("/login", (req, res) => {
    const { tipoConta, nome, senha, data, hora, codigo } = req.body;
    let proxy;
    if (tipoConta === "admin") {
        proxy = proxyAdmin;
    }
    else {
        proxy = proxyCliente;
    }
    try {
        const dadosUsuario = proxy.acessarSistema(nome, senha, data, hora, codigo);
        console.log("Dados da conta:", dadosUsuario);
        res.json(dadosUsuario);
    }
    catch (error) {
        res.status(401).json({ erro: error instanceof Error ? error.message : error });
    }
});
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
