-- Pega dados de mais tabelas e mostra
SELECT clientes.idcliente, clientes.nome, clientes.email, Pedidos.numeroPedido
FROM clientes
INNER join Pedidos ON clientes.idcliente = Pedidos.idcliente;

-- Pega de mais outra tabela
SELECT users.id, users.email, pedidos.id, pedidos.id_produto, produto.nome
FROM users
-- liga pedidos com users
INNER JOIN pedidos on users.id = pedidos.id_users
-- liga protudo com pedidos
INNER JOIN produto on pedidos.id_produto = produto.id;

-- Pega de mais outra tabela mas mostrado todos os dados mesmo não tendo em outras tabelas
SELECT users.id, users.email, pedidos.id, pedidos.id_produto, produto.nome
FROM users
-- liga pedidos com users
Left JOIN pedidos on users.id = pedidos.id_users
-- liga protudo com pedidos
Left JOIN produto on pedidos.id_produto = produto.id;