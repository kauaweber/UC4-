CREATE TABLE IF NOT exists clientes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    data_cadastro DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS livros (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(150) NOT NULL,
autor VARCHAR(100) NOT NULL,
preco DECIMAL(8, 2) NOT NULL,
estoque INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS pedidos (
id INT PRIMARY KEY auto_increment,
cliente_id INT,
data_pedido DATE NOT NULL,
CONSTRAINT fk_cliente_pedido
foreign key pedidos(cliente_id) REFERENCES
clientes(id)
);

CREATE TABLE IF NOT EXISTS itens_pedido(
id INT PRIMARY KEY auto_increment,
pedido_id INT,
livro_id INT,
quantidade INT NOT NULL DEFAULT 1,
CONSTRAINT fk_pedido_itens_pedido
FOREIGN KEY itens_pedido(pedido_id) REFERENCES
pedidos(id),
CONSTRAINT fk_livro_itens_pedido
FOREIGN KEY itens_pedido(livro_id) REFERENCES
livros(id)
);

INSERT INTO clientes (nome, email, data_cadastro) VALUES 
('Kaua', 'kaue@gmail', '2025-08-27'),
('Penis', 'Pen@gmail', '2025-09-17'),
('Heitor', 'hei@gmail', '2025-10-12');

INSERT INTO livros (titulo, autor, preco, estoque) VALUES
('O senhor dos Anais', 'J.J.R', 199.99, 69),
('TUN TUN SAHUR', 'Tun Tun', 69.99, 96),
('Tralalero Tralala em suas aventuras', 'Aladin', 5.00, 1000);

INSERT INTO pedidos (cliente_id, data_pedido) VALUES
('2', '2025-08-27'),
('1', '2025-09-17'),
('3', '2025-10-12'),
('2', '2025-11-27'),
('1', '2025-10-17'),
('3', '2025-07-15');
INSERT INTO itens_pedido(pedido_id, livro_id, quantidade) VALUES
('1', '1', '1'),
('2', '1', '2'),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),