-- postgres script
DROP DATABASE IF EXISTS zombieland;
CREATE DATABASE zombieland;
--Te mueve a la base de datos
\c zombieland;


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

INSERT INTO infecciones(nombre, id_estado) VALUES
('Daniel Cu',1),
('Daniel Cu',2),
('Daniel Cu',3),
('Daniel Cu',4),
('Juan Perez',2),
('Juan Perez',1),
('Juan Perez',3),
('Juan Perez',4);