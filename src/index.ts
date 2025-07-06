import express, { Request, Response } from "express";
import { ContaFactory } from './factory/ContaFactory';
import { Endereco } from "./models/Endereco";
import { ValidacaoUsuarioProxy } from "./UsuarioProxy/ValidacaoUsuarioProxy";
import { LegacyXMLSystem } from "./services/LegacyXMLSystem";
import { JsonToXmlAdapter } from "./adapters/JsonToXMLAdapter";
import { Credito } from "./models/pagamentos/Credito";
import { Debito } from "./models/pagamentos/Debito";
import { Pix } from "./models/pagamentos/Pix";

const app = express();
app.use(express.json());

// Cadastro (simulando entrada do frontend)
app.post("/cadastro", (req: Request, res: Response) => {
    const legacySystem = new LegacyXMLSystem();
    const adapter = new JsonToXmlAdapter(legacySystem);

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
    } catch (error) {
        res.status(400).json({ erro: error instanceof Error ? error.message : error });
    }
});

// Teste de formas de pagamento
app.get("/testar-pagamentos", (req: Request, res: Response) => {
    const formas = [
        { tipo: "credito", instancia: new Credito() },
        { tipo: "debito", instancia: new Debito() },
        { tipo: "pix", instancia: new Pix() }
    ];
    const resultados = formas.map(forma => ({
        tipo: forma.tipo,
        resultado: forma.instancia.processarPagamento(10.50)
    }));
    res.json(resultados);
});

// Instâncias fixas para exemplo
const conta1 = ContaFactory.criarConta('admin', 'João', 'joao@admin.com', new Endereco(1, "Rua A", 123, 'São Paulo', 'SP', '01000-000'));
const conta2 = ContaFactory.criarConta('cliente', 'Maria', 'maria@cliente.com', new Endereco(2, "Rua B", 234, 'Santa Catarina', 'SC', '02000-000'));
const proxyAdmin = new ValidacaoUsuarioProxy(conta1);
const proxyCliente = new ValidacaoUsuarioProxy(conta2);

// Login/acesso à conta: tudo vem do front-end!
app.post("/login", (req: Request, res: Response) => {
    const { tipoConta, nome, senha, data, hora, codigo } = req.body;
    let proxy;
    if (tipoConta === "admin") {
        proxy = proxyAdmin;
    } else {
        proxy = proxyCliente;
    }
    try {
        const dadosUsuario = proxy.acessarSistema(nome, senha, data, hora, codigo);
        console.log("Dados da conta:", dadosUsuario);
        res.json(dadosUsuario);
    } catch (error) {
        res.status(401).json({ erro: error instanceof Error ? error.message : error });
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});