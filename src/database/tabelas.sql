CREATE DATABASE projetoJudasPriest;
USE projetoJudasPriest;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
senha VARCHAR(45) NOT NULL
);

CREATE TABLE disco(
idDisco INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(23),
dtLancamento DATE
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

INSERT INTO disco (nome, dtLancamento) VALUES
('Rocka Rolla', '1974-09-06'),
('Sad Wings of Destiny', '1976-03-23'),
('Sin After Sin', '1977-04-23'),
('Stained Class', '1978-02-10'),
('Killing Machine', '1978-09-10'),
('British Steel', '1980-04-14'),
('Point of Entry', '1981-02-26'),
('Screaming for Vengeance', '1982-07-17'),
('Defenders of the Faith', '1984-01-04'),
('Turbo', '1986-04-15'),
('Ram it Down', '1988-05-17'),
('Painkiller', '1990-09-03'),
('Jugulator', '1997-10-28'),
('Demolition', '2001-07-31'),
('Angel of Retribution', '2005-02-28'),
('Nostradamus', '2008-06-17'),
('Redeemer of Souls', '2014-07-11'),
('Firepower', '2018-03-09'),
('Invincible Shield', '2024-03-06');