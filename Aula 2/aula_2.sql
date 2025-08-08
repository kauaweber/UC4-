-- CONSULTA

--Consulta simples (retorna TODOS os dados de uma ou mais colunas)
SELECT id, name, email FROM users;

SELECT * FROM users;

-- Ordenar do menor pro maior 
SELECT * FROM users ORDER BY nome ASC; -- Vai ordenar de A à Z
-- Ordenar do menor pro maior 
SELECT * FROM users ORDER BY id ASC; -- Vai ordenar de 1 à infinito

-- Ordenar do maior pro menor 
SELECT * FROM users ORDER BY nome DESC; -- Vai ordenar de Z à A
-- Ordenar do maior pro menor 
SELECT * FROM users ORDER BY id ASC; -- Vai ordenar de um numero até 1

-- Consulta com condição + dados ordenados 
SELECT * FROM guerreiros WHERE poder_de_luta > 9000 ORDER BY nome ASC;

-- Consulta com limite de resultados 
SELECT * FROM guerreiros LIMIT 3;

-- consulta do valores distintos 
SELECT DISTINTS  universo FROM guerreiros;