CREATE DATABASE biblioteca;

use biblioteca;
create table libros (
	id 	int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(80) NOT NULL,
	tipo VARCHAR(20) NOT NULL,
	id_autor integer not null,
	id_editor integer not null,
	id_traductor integer,
	FOREIGN KEY (id_autor) REFERENCES autores (id),
	FOREIGN KEY (id_editor) REFERENCES editores (id),
	FOREIGN KEY (id_traductor) REFERENCES traductores (id)
	);

create table autores (
	id 	int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(80) NOT NULL,
	apellido VARCHAR(80) NOT NULL);

create table editores (
	id 	int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(80) NOT NULL,
	apellido VARCHAR(80) NOT NULL);
	
create table traductores (
	id 	int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(80) NOT NULL,
	apellido VARCHAR(80) NOT NULL);
	
insert into autores (nombre, apellido) VALUES 
('nombre_1', 'apellido_1'),
('nombre_2', 'apellido_2'),
('nombre_3', 'apellido_3'),
('nombre_4', 'apellido_4'),
('nombre_5', 'apellido_5'),
('nombre_6', 'apellido_6'),
('nombre_7', 'apellido_7'),
('nombre_8', 'apellido_8');
	
insert into editores (nombre, apellido) VALUES 
('nombre_1', 'apellido_1'),
('nombre_2', 'apellido_2'),
('nombre_3', 'apellido_3'),
('nombre_4', 'apellido_4');

insert into traductores (nombre, apellido) VALUES 
('nombre_1', 'apellido_1'),
('nombre_2', 'apellido_2'),
('nombre_3', 'apellido_3'),
('nombre_4', 'apellido_4');

insert into libros (titulo, tipo, id_autor, id_editor, id_traductor) VALUES 
('titulo_1', 'original', 1, 1,null),
('titulo_2', 'traducido', 1, 1,2),
('titulo_3', 'original', 2, 1,null),
('titulo_4', 'traducido', 2, 1,3),
('titulo_5', 'original', 3, 2,null),
('titulo_6', 'original', 4, 1,null),
('titulo_7', 'original', 5,2,null),
('titulo_8', 'original', 5, 1,null);



-- 1
SELECT *
FROM libros l
LEFT JOIN editores e
ON l.id_editor = e.id
WHERE e.id=null;

SELECT *
FROM libros
INNER JOIN traductores
ON libros.id_traductor = traductores.id
ORDER BY libros.id;

SELECT *
FROM libros l
LEFT JOIN traductores t
ON l.id_traductor = t.id
ORDER BY l.id;



SELECT l.id, l.titulo, a.nombre, a.apellido as Nombre_autor
FROM libros l
INNER JOIN autores a
ON l.id_autor = a.id
ORDER BY l.id;
-- 2
SELECT l.id, l.titulo, l.tipo, t.apellido AS traductor
FROM libros l
JOIN traductores t
ON l.id_traductor = t.id
ORDER BY l.id;
-- 3
SELECT l.*, a.apellido AS autor,
 t.apellido AS traductor
FROM libros l
LEFT JOIN autores a
ON l.id_autor= a.id
LEFT JOIN traductores t
ON l.id_traductor = t.id
ORDER BY l.id;
--4
SELECT l.id, l.titulo, e.apellido as editor
FROM libros l
LEFT JOIN editores e
ON l.id_editor = e.id
ORDER BY l.id;
select * from editores;
select * from libros;
--5
SELECT l.id, l.titulo, e.apellido as editor
FROM libros l
RIGHT JOIN editores e
ON l.id_editor = l.id
ORDER BY l.id;

--6
SELECT *
FROM libros l
FULL JOIN editores e
ON l.id_editor = e.id
ORDER BY l.id;

SELECT l.id, l.titulo, e.apellido as editor
FROM libros l
JOIN editores e
ON l.id_editor = e.id
ORDER BY l.id;

-- 7
SELECT l.id, l.titulo, a.apellido as autor, e.apellido as editor, t.apellido as traductor
FROM libros l
FULL JOIN autores a
ON l.id_autor = a.id
FULL JOIN editores e
ON l.id_editor = e.id
FULL JOIN traductores t
ON l.id_traductor = t.id
ORDER BY l.id;