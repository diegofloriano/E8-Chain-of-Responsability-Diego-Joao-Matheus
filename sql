CREATE TABLE Endereco (
    id INT PRIMARY KEY IDENTITY(1,1),
    rua VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep VARCHAR(10) NOT NULL
);
CREATE TABLE Usuario (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cpf VARCHAR(14),
    dtNascimento DATE,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('admin', 'cliente')),
    endereco_id INT NULL,
    FOREIGN KEY (endereco_id) REFERENCES Endereco(id)
);
CREATE TABLE FormaPagamento (
    id INT PRIMARY KEY IDENTITY(1,1),
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('credito', 'debito', 'pix'))
);
CREATE TABLE Produto (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(100) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    peso DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    tipo VARCHAR(30) NOT NULL, -- Ex: 'sorvete', 'picole', 'milkshake', 'acai', 'casquinha'
    descricao VARCHAR(255)
    -- Campos específicos podem ser criados em tabelas filhas se necessário
);
CREATE TABLE Pedido (
    id INT PRIMARY KEY IDENTITY(1,1),
    usuario_id INT NOT NULL,
    data DATETIME NOT NULL DEFAULT GETDATE(),
    forma_pagamento_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (forma_pagamento_id) REFERENCES FormaPagamento(id)
);
CREATE TABLE PedidoItem (
    id INT PRIMARY KEY IDENTITY(1,1),
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(id),
    FOREIGN KEY (produto_id) REFERENCES Produto(id)
);
CREATE TABLE PedidoHistorico (
    id INT PRIMARY KEY IDENTITY(1,1),
    pedido_id INT NOT NULL,
    data DATETIME NOT NULL DEFAULT GETDATE(),
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(id)
);