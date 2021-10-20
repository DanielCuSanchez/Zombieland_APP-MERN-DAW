-- postgres script
DROP DATABASE IF EXISTS zombieland;
CREATE DATABASE zombieland;
\c zombieland;


--Te mueve a la base de datos


-- CREATE TABLES
CREATE TABLE estados (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL
);

CREATE TABLE infecciones (
  id SERIAL PRIMARY KEY,
  id_estado INTEGER NOT NULL,
  nombre TEXT NOT NULL,
  registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP(0)
);
-- END CREATE TABLES

-- CONSTRAINTS

ALTER TABLE infecciones
ADD CONSTRAINT FK_estados
FOREIGN KEY(id_estado)
REFERENCES estados(id);

INSERT INTO estados(nombre) VALUES
('Infeccion'),
('Desorientacion'),
('Violencia'),
('Desmayo'),
('Transformacion');