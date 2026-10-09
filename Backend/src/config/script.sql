CREATE DATABASE gerenciamentoEvento;
USE gerenciamentoEvento;

CREATE TABLE IF NOT EXISTS localEvent (
    idlocal INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    capacidade INT NOT NULL,
    cidade VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS evento (
    idevento INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    data_evento DATE NOT NULL,
    hora TIME NOT NULL,
    local_idlocal INT NOT NULL,

    PRIMARY KEY (idevento, local_idlocal),

    INDEX fk_evento_local_idx (local_idlocal),

    CONSTRAINT fk_evento_localEvent
        FOREIGN KEY (local_idlocal)
        REFERENCES localEvent (idlocal)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS participante (
    idparticipante INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS inscricao (
    idinscricao INT AUTO_INCREMENT NOT NULL,
    data_inscricao DATE NOT NULL,
    participante_idparticipante INT NOT NULL,
    evento_idevento INT NOT NULL,
    evento_local_idlocal INT NOT NULL,

    PRIMARY KEY (idinscricao, participante_idparticipante),

    INDEX fk_inscricao_participante1_idx
        (participante_idparticipante),

    INDEX fk_inscricao_evento1_idx
        (evento_idevento, evento_local_idlocal),

    CONSTRAINT fk_inscricao_participante1
        FOREIGN KEY (participante_idparticipante)
        REFERENCES participante (idparticipante)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,

    CONSTRAINT fk_inscricao_evento1
        FOREIGN KEY (evento_idevento, evento_local_idlocal)
        REFERENCES evento (idevento, local_idlocal)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

-- Dados dos locais
INSERT INTO localEvent
(nome, endereco, capacidade, cidade)
VALUES
('Bela Fama', 'Rua dos Bobos', 1500, 'Toledo'),
('Xurupita Farm', 'Rua da Preguica', 1000, 'Pelotas'),
('Ray Land', 'Rua do Quati', 100, 'Pato Branco');

-- Dados dos eventos
INSERT INTO evento
(nome, descricao, data_evento, hora, local_idlocal)
VALUES
('Workshop de Programacao',
 'Introducao ao desenvolvimento de software',
 '2026-11-10', '09:00:00', 1),
('Feira de Tecnologia',
 'Exposicao de novas tecnologias',
 '2026-11-15', '14:00:00', 2),
('Curso de Banco de Dados',
 'Aprendizado de SQL e modelagem de dados',
 '2026-11-20', '08:30:00', 3);

-- Dados dos participantes
INSERT INTO participante
(nome_completo, email, telefone)
VALUES
('Ana Silva', 'ana@example.com', '47991234567'),
('Bruno Santos', 'bruno@example.com', '47992345678'),
('Carla Oliveira', 'carla@example.com', '47993456789');

-- Dados das inscricoes
INSERT INTO inscricao
(data_inscricao, participante_idparticipante,
 evento_idevento, evento_local_idlocal)
VALUES
('2026-10-01', 1, 1, 1),
('2026-10-02', 2, 1, 1),
('2026-10-03', 1, 2, 2),
('2026-10-04', 3, 3, 3);

DROP DATABASE gerenciamentoEvento;