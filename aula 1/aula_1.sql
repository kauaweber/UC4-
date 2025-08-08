-- Como criar a tabela
CREATE TABLE IF NOT EXISTS usuarios (
-- Nome Tipo Outras caracteristicas
id INT PRIMARY KEY,
nome VARCHAR(100),
idade INT,
email VARCHAR(50),
senha VARCHAR(25)
);


-- Como alterar uma tabela e add nova coluna
ALTER TABLE usuarios ADD endereco VARCHAR(100)

-- Como alterar uma tabela e mudar o tipo de uma coluna
ALTER TABLE usuarios MODIFY endereco TEXT

-- Como alterar uma tabela e mudar o nome de uma coluna
ALTER TABLE usuarios 
CHANGE COLUMN endereco logradouro VARCHAR(255)

-- Para apagar uma coluna
ALTER TABLE usuarios DROP COLUMN idade;

-- Como alterar uma tabela e renomea-la
ALTER TABLE usuarios RENAME TO clientes;

-- Como deletar uma tabela (CUIDADO! Exclui todos os dados!)
DROP TABLE clientes;

-- Insere informações ma tabela 
INSERT INTO users (id, username, email, user_password) VALUES (1, 'kaua', 'kauvice@gmail.com', 'senha699'),
(2,' arthur', 'arvice@gmail.com', 'senha799');

-- Atualiza uma informação na tabela
UPDATE users 
SET email =  'kauvice@gmail.com.br'
WHERE id = 1;

-- Como deletar um dado
DELETE FROM users 
WHERE id = 2;

-- Cria uma tabela SE NAO EXISTIR 
CREATE TABLE IF NOT EXISTS users (
	-- Auto increment Auto Incrementa o ID 
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    -- Not Null Impede que o valor do campo seja nulo
    -- Unique Faz com que o valor do campo seja unico (não pode dois iguais)
    email VARCHAR(100)NOT NULL UNIQUE,
    user_password VARCHAR(100) NOT NULL  
);