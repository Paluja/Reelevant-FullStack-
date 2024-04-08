-- Listar los perros cuyos nombres empiezan por B
SELECT * FROM Perros WHERE nombre LIKE 'B%';

-- Encontrar la estatura media minima entre todas las razas
SELECT MIN(estatura_media) from perros


-- Listar los las razas de los perros que tienen peso_medio mayor a 11 o estatura_media menor a 50
SELECT raza, estatura_media, peso_medio FROM Perros WHERE peso_medio > 11 OR estatura_media < 50;

--Listar razas de perros que tienen peso_medio mayor a 11 o estatura_media menor a 50, pero no ambas
/*
    This query selects the columns 'raza', 'estatura_media', and 'peso_medio' from the 'Perros' table.
    It retrieves the records where either the 'peso_medio' is greater than 11 or the 'estatura_media' is less than 50, but not both.
*/

/*Selecciona los que cumplen la cualidad de peso medio y la de estatura, PERO NO,
los que cumplen ambas condicinones */
SELECT raza, estatura_media, peso_medio FROM Perros WHERE peso_medio > 11 OR estatura_media < 50 AND NOT(peso_medio > 11  OR estatura_media < 50);

-- mostrar el peso_medio media de los perros que tienen una vida media superior a 10 años
SELECT peso_medio, vida_media FROM Perros WHERE vida_media > 10;

-- Contar cuentas razas distintas de perros hay en la tabla

SELECT COUNT(DISTINCT(raza)) FROM Perros;

--listar perros que son de color 'Dorado' y tienen una estatura media superior a 50cm

SELECT raza FROM Perros WHERE estatura_media > 50 AND color = 'Dorado';

-- Odenar los perros por peso de forma ascendente
SELECT * FROM Perros ORDER BY peso_medio ASC;

-- Listar todos los perros que no sean de color marron
SELECT * FROM Perros WHERE color not like '%Marron%';

--Listar las razas con vida media de menos de 10 años o pesan menos de 10 kg

SELECT raza FROM Perros WHERE vida_media < 10 AND peso_medio < 10;

--listar  las razas de perros en orden alfabetico inverso, descendente
SELECT * FROM Perros ORDER BY raza DESC;

--cambiar el origen de una raza especifica:
    --cambia el orgin de labrador retriever a Estados Unidos
UPDATE Perros SET origen = 'Estados Unidos' WHERE raza = 'Labrador Retriever';

--Modificar vida media de varias razas
    --Incrementar en dos años la vide media de todas las razas de alemania
UPDATE Perros SET vida_media= vida_media + 2 WHERE origen = 'Alemania';
