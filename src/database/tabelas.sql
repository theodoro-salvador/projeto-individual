CREATE DATABASE projetoJudasPriest;
USE projetoJudasPriest;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
senha VARCHAR(45) NOT NULL
);

CREATE TABLE formacao(
idFormacao INT PRIMARY KEY AUTO_INCREMENT,
vocal VARCHAR(45),
guitarra1 VARCHAR(45),
guitarra2 VARCHAR(45),
baixo VARCHAR(45),
bateria VARCHAR(45)
);

CREATE TABLE disco(
idDisco INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(23),
dtLancamento DATE,
fkFormacao INT,
CONSTRAINT chFkFormacao
	FOREIGN KEY (fkFormacao)
		REFERENCES formacao (idFormacao)
);

CREATE TABLE voto(
fkDisco INT,
CONSTRAINT chFkDisco
	FOREIGN KEY (fkDisco)
		REFERENCES disco (idDisco),
fkUsuario INT UNIQUE,
CONSTRAINT chFkUsuario
	FOREIGN KEY (fkUsuario)
		REFERENCES usuario (idUsuario),
CONSTRAINT pkVoto
	PRIMARY KEY (fkDisco, fkUsuario)	
);

CREATE TABLE topico(
idTopico INT PRIMARY KEY AUTO_INCREMENT,
fkAutor INT NOT NULL,
CONSTRAINT chFkAutorTopico
	FOREIGN KEY (fkAutor)
		REFERENCES usuario (idUsuario),
titulo VARCHAR(50) NOT NULL,
descricao VARCHAR(255) NOT NULL,
dtCriacao DATE DEFAULT(CURDATE()) NOT NULL
);

CREATE TABLE postagem(
idPostagem INT NOT NULL,
fkTopico INT NOT NULL,
CONSTRAINT pkPostagem
	PRIMARY KEY (idPostagem, fkTopico),
CONSTRAINT chFkTopico
	FOREIGN KEY (fkTopico)
		REFERENCES topico (idTopico),
fkAutor INT NOT NULL,
CONSTRAINT chFkAutorPost
	FOREIGN KEY (fkAutor)
		REFERENCES usuario (idUsuario),
texto VARCHAR(500) NOT NULL,
dtPostagem DATETIME DEFAULT(CURRENT_TIMESTAMP) NOT NULL
);

INSERT INTO formacao (vocal, guitarra1, guitarra2, baixo, bateria) VALUES
('Rob Halford', 'Glenn Tipton', 'K.K. Downing', 'Ian Hill', 'John Hinch'),
('Rob Halford', 'Glenn Tipton', 'K.K. Downing', 'Ian Hill', 'Alan Moore'),
('Rob Halford', 'Glenn Tipton', 'K.K. Downing', 'Ian Hill', 'Simon Phillips'),
('Rob Halford', 'Glenn Tipton', 'K.K. Downing', 'Ian Hill', 'Les Binks'),
('Rob Halford', 'Glenn Tipton', 'K.K. Downing', 'Ian Hill', 'Dave Holland'),
('Rob Halford', 'Glenn Tipton', 'K.K. Downing', 'Ian Hill', 'Scott Travis'),
("Tim 'Ripper' Owens", 'Glenn Tipton', 'K.K. Downing', 'Ian Hill', 'Scott Travis'),
('Rob Halford', 'Glenn Tipton', 'Richie Faulkner', 'Ian Hill', 'Scott Travis');

INSERT INTO disco (nome, dtLancamento, fkFormacao) VALUES
('Rocka Rolla', '1974-09-06', 1),
('Sad Wings of Destiny', '1976-03-23', 2),
('Sin After Sin', '1977-04-23', 3),
('Stained Class', '1978-02-10', 4),
('Killing Machine', '1978-09-10', 4),
('British Steel', '1980-04-14', 5),
('Point of Entry', '1981-02-26', 5),
('Screaming for Vengeance', '1982-07-17', 5),
('Defenders of the Faith', '1984-01-04', 5),
('Turbo', '1986-04-15', 5),
('Ram it Down', '1988-05-17', 5),
('Painkiller', '1990-09-03', 6),
('Jugulator', '1997-10-28', 7),
('Demolition', '2001-07-31', 7),
('Angel of Retribution', '2005-02-28', 6),
('Nostradamus', '2008-06-17', 6),
('Redeemer of Souls', '2014-07-11', 8),
('Firepower', '2018-03-09', 8),
('Invincible Shield', '2024-03-06', 8);