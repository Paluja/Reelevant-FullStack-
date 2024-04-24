-- 1.Identificar todos los platillos que pertenecen a (por) 
-- categorías que han tenido al menos un platillo con un precio superior a $100.
SELECT categoriaId
FROM platillos
WHERE precio > 100
GROUP BY categoriaId;

SELECT nombre, categoriaId
FROM platillos
WHERE categoriaId IN (SELECT categoriaId
						FROM platillos
						WHERE precio > 100
						GROUP BY categoriaId);
-- 2.Mostrar las reservaciones hechas por clientes con apellido 'Pérez':
SELECT COUNT(*) AS num_reservaciones
FROM reservaciones
WHERE clienteId IN (SELECT id 
					FROM clientes
					WHERE apellido = 'Pérez');

-- 3.Identificar las categorías que no tienen platillos asignados:
SELECT id, nombre
FROM categoria
WHERE id NOT IN (SELECT DISTINCT categoriaId
					FROM platillos);


-- 4.Obtener los nombres de los clientes que nunca han hecho una reservación:
SELECT nombre 
FROM clientes
WHERE id NOT IN(SELECT DISTINCT clienteId
				FROM reservaciones);
-- 5.Listar todos los clientes que no han reservado para una fecha específica:
SELECT nombre, id
FROM clientes 
WHERE id NOT IN (SELECT DISTINCT clienteId
			FROM reservaciones
			WHERE fecha = '2019-07-30');

-- 6.Identificar clientes que nunca han reservado una mesa en fecha '2019-07-01':
SELECT nombre, id
FROM clientes 
WHERE id NOT IN (SELECT DISTINCT clienteId
			FROM reservaciones
			WHERE fecha = '2019-07-01');
-- 7.Encontrar las reservaciones para clientes cuyo nombre comienza con 'A':


-- 8.Listar platillos que tienen un precio superior al precio de cualquier platillo de 'Desayunos':

SELECT MAX(precio)
FROM platillos
WHERE categoriaId = (SELECT id
					FROM categoria
					WHERE nombre = 'Desayunos');

SELECT id
FROM categoria
WHERE nombre = 'Desayunos';

SELECT nombre, precio
FROM platillos
WHERE precio > ANY (SELECT MAX(precio)		
					FROM platillos
					WHERE categoriaId = (SELECT id
										FROM categoria
										WHERE nombre = 'Desayunos'));
-- 9.Identificar los clientes que han reservado una mesa exactamente 3 veces:

SELECT nombre, apellido
FROM clientes
WHERE id IN (SELECT clienteID
			FROM reservaciones
			GROUP BY clienteId
			HAVING COUNT(*) = 3);

SELECT clienteID, COUNT(*)
FROM reservaciones
GROUP BY clienteId
HAVING COUNT(*) = 3;

  
-- 10.Seleccionar todos los clientes que han hecho reservaciones en más de 5 ocasiones:
SELECT nombre, apellido
FROM clientes
WHERE id IN (SELECT clienteID
			FROM reservaciones
			GROUP BY clienteId
			HAVING COUNT(*) >= 5);
   
   
-- 11.Mostrar las reservaciones para las cuales la cantidad de mesas reservadas es mayor que el promedio:
SELECT id
FROM reservaciones
WHERE `cantidad de mesas` > (SELECT AVG(`cantidad de mesas`)
							FROM reservaciones);

   
-- 12.Encontrar la categoría con el mayor número de platillos: 

SELECT nombre
FROM categoria
WHERE id = (SELECT categoriaId
			FROM platillos
			GROUP BY categoriaId
			ORDER BY COUNT(*) DESC
			LIMIT 1);


SELECT categoriaId
FROM platillos
GROUP BY categoriaId
ORDER BY COUNT(*) DESC
LIMIT 1;

-- 13.Encontrar platillos que son más baratos que cualquier platillo de la categoría 'Ensaladas':
SELECT id, nombre
FROM platillos
WHERE precio < ANY (SELECT precio
				FROM platillos
				WHERE categoriaId IN (SELECT id
										FROM categoria
										WHERE nombre = 'Ensaladas'));

SELECT precio
FROM platillos
WHERE categoriaId IN (SELECT id
			FROM categoria
			WHERE nombre = 'Ensaladas');
   
-- 14.Listar todos los platillos cuyo precio es menor que el precio más bajo de la categoría 'Bebidas con Alcohol':
SELECT id, nombre
FROM platillos
WHERE precio <  (SELECT precio
				FROM platillos
				WHERE categoriaId IN (SELECT id
										FROM categoria
										WHERE nombre = 'Bebidas con alcohol')
				GROUP BY precio
                LIMIT 1);
-- 15.Mostrar los platillos disponibles cuyo precio es mayor que cualquier precio en la categoría 'Desayunos': 
SELECT id, nombre, disponible
FROM platillos
WHERE disponible = 1 AND precio < ANY(SELECT precio
									FROM platillos
									WHERE categoriaId IN (SELECT id
															FROM categoria
															WHERE nombre = 'Desayunos'));


-- 16.Seleccionar las categorías que tienen platillos con un precio superior al promedio de precios de todos los platillos:
SELECT nombre
FROM categoria
WHERE id IN (SELECT categoriaId
			FROM platillos
            WHERE precio > (SELECT AVG(PRECIO)
							FROM platillos));

-- 17.Listar los platillos cuyo precio es menor que el precio de cualquier bebida con alcohol:
SELECT id, nombre, precio, categoriaId
FROM platillos
WHERE precio < ANY (SELECT DISTINCT precio
						FROM platillos 
						WHERE categoriaId = (SELECT id 
												FROM categoria
												WHERE nombre = 'Bebidas con Alcohol'));


-- 18.Encuentra todos los platillos que son más caros que cualquier platillo en la categoría 'Postres':
SELECT id, nombre
FROM platillos
WHERE precio < ANY (SELECT precio
						FROM platillos 
						WHERE categoriaId IN (SELECT id 
												FROM categoria
												WHERE nombre = 'Postres'));

-- 19.Identificar platillos cuyo precio es mayor que el precio de todos los platillos de 'Postres':

-- 20.Mostrar todos los platillos cuyo precio es inferior al precio de cualquier platillo de la categoría 'Comida':  

-- 21.Listar las categorías cuyos platillos no están actualmente disponibles:

-- 22.Mostrar los platillos más caros que no están disponibles, pero cuyo precio es menor que el doble del precio mínimo de cualquier platillo disponible:

-- 23.Identificar las reservaciones hechas para fechas en las cuales ningún cliente ha reservado más de dos mesas:

-- 24.Encontrar clientes que han reservado más de una mesa en todas sus reservaciones:    

-- 25.Listar los clientes que solo han hecho reservaciones en el año 2019: 

-- 26.Listar los platillos que están temporalmente no disponibles y son más caros que el platillo más barato disponible:
   
-- 27. Consulta para encontrar platillos más caros que el promedio de su categoría:


    