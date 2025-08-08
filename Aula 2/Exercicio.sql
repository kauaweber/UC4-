CREATE TABLE IF NOT EXISTS guerreiros(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
universo VARCHAR (50),
raça VARCHAR (100),
poder_de_luta DECIMAl (5, 2)
);

select * from guerreiros;

insert into guerreiros(nome, universo, raça, poder_de_luta)
values ('goku', 'universo 7', 'saiajyn', 90000),
('vegeta', 'universo 7', 'saiajyn', 85000),
('jiren', 'universo 11', 'desconhecida', 120000),
('hit', 'universo 6', 'assassino', 75000),
('freeza', 'universo 7', 'mutante', 60000),
('toppo', 'universo 11', 'deus da destruição', 95000),
('cabba', 'universo 6', 'saiajyn', 30000),
('android 17', 'universo 7', 'android', 70000);

delete from guerreiros
where id = 8;

alter table guerreiros modify poder_de_luta double;

select * from guerreiros universo where universo = 'universo 7';

