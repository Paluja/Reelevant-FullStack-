

-- # ### Ejercicio 1
-- # **Consigna**: Crea una vista que liste las razas y sus colores. Luego, cambia el color de 'Labrador Retriever' y verifica cómo se refleja este cambio en la vista.


-- # -- - Crear la vista:
  
-- #   CREATE VIEW VistaRazasPorColor AS
-- #   SELECT raza, color FROM Perros;
  
-- # -- - Modificar la tabla:
 
-- #   UPDATE Perros SET COLOR = 'Negro Puro' WHERE raza = 'Labrador Retriever';


-- #   Cuando trabajamos en MySQL Shell esta actualizacion se realizara sin problemas, pero en MySQL Workbench
-- #   se utiliza un modo seguro por defecto, mediante el cual no se permitira actualizar o eliminar elementos de la tabla cuando la condicion WHERE no involucre una condicion referida a la clave primaria.
  

-- # -- Para realizar la operación se puede desactivar temporalmente el modo seguro con la consulta `SET SQL_SAFE_UPDATES=0;`, realizar la actualización( o eliminar informacion), y luego reactivarlo con `SET SQL_SAFE_UPDATES=1;`:

-- # -- SET SQL_SAFE_UPDATES = 0;
-- # -- UPDATE Perros SET color = 'Negro Puro' WHERE raza = 'Labrador Retriever';
-- #  -- SET SQL_SAFE_UPDATES = 1;

-- # -- - Verificar la vista:
  
-- #   SELECT * FROM VistaRazasPorColor;

-- # ### Ejercicio 2
-- # **Consigna**: Crea una vista que muestre sólo las razas de perros con un peso medio mayor a 20 kg. Incrementa el peso medio de 'Beagle' y comprueba el cambio en la vista.

-- # ### Ejercicio 3
-- # **Consigna**: Crea una vista que liste todas las razas y sus respectivas vidas medias. Modifica la vida media del 'Pug' y observa cómo se actualiza en la vista.

-- # ### Ejercicio 4
-- # **Consigna**: Crea una vista que muestre las razas y sus orígenes. Cambia el origen del 'Akita Inu' y verifica la actualización en la vista.

-- # ### Ejercicio 5
-- # **Consigna**: Crea una vista que liste las razas con una estatura media superior a 40 cm. Aumenta la estatura media del 'Cocker Spaniel' y verifica los cambios en la vista.
CREATE VIEW vista_estatura_mas_40 AS
SELECT raza, estatura_media
FROM Perros
WHERE estatura_media > 40;

-- # ### Ejercicio 6
-- # **Consigna**: Crea una vista que agrupe las razas por origen y muestre el peso medio promedio, 
-- pero sólo incluye aquellos orígenes donde el peso promedio supera los 15 kg. Modifica el peso medio 
-- de 'Bulldog Francés' y comprueba cómo afecta la vista.
CREATE VIEW vista_origen_peso_promedio_mas_15 AS
SELECT origen,AVG(peso_medio)
FROM Perros
GROUP BY origen
HAVING AVG(peso_medio) > 15;

-- # ### Ejercicio 7
-- # **Consigna**: Crea una vista que liste las cinco razas con la estatura media más alta. Modifica la estatura de 'Golden Retriever' 
-- para ver si entra en el top 5 y verifica la vista.
CREATE VIEW vista_max_estatura AS
SELECT raza, estatura_media
FROM Perros
ORDER BY estatura_media DESC
LIMIT 5;

-- # ### Ejercicio 8
-- # **Consigna**: Crea una vista que muestre las razas cuyo color incluya 'blanco' o 'negro', 
-- ordenadas por color. Cambia el color de 'Husky Siberiano' a 'Blanco y negro' y verifica si aparece correctamente en la vista.
ALTER VIEW vista_color_negro_blanco AS
SELECT raza ,color
FROM Perros
WHERE color LIKE '%blanco%' OR color LIKE '%negro%'
ORDER BY color;

-- # ### Ejercicio 9
-- # **Consigna**: Crea una vista que muestre razas que tienen una vida media de al menos 12 años y un peso medio menor a 25 kg. 
-- Modifica la vida media y el peso del 'Beagle' para cumplir con estos criterios y verifica la vista.
ALTER VIEW vista_vida_media_peso_medio AS
SELECT raza, vida_media, peso_medio
FROM Perros
WHERE vida_media >= 12 AND peso_medio < 25;

-- # ### Ejercicio 10
-- # **Consigna**: Crea una vista que ofrezca una estadística avanzada del origen de las razas, 
-- incluyendo el número total de razas, la vida media promedio y el peso medio mínimo, para aquellos orígenes con más de dos razas 
-- y una vida media promedio superior a 10 años. Añade una nueva raza 'Labrador Mini' en Canadá que influya en estas estadísticas y verifica la vista.
CREATE VIEW AS
SELECT origen ,COUNT(*) AS Cantidad, avg(vida_media) AS vida_promedio, MIN(peso_medio) AS minimo_peso
FROM Perros
GROUP BY origen
HAVING COUNT(raza) > 2 AND AVG(vida_media) > 10;


-- # ### Ejercicio 11
-- # **Consigna**: Crea una vista que liste todas las razas y sus vidas medias en orden descendente. Luego, incrementa la vida media de 'Chihuahua' y verifica la vista para ver si el orden cambia adecuadamente.

-- # ### Ejercicio 12
-- # **Consigna**: Crea una vista que muestre las razas con un peso medio superior a 30 kg. Reduce el peso medio del 'Doberman' y verifica si aún aparece en la vista.

-- # ### Ejercicio 13
-- # **Consigna**: Crea una vista que agrupe las razas por color y 
-- muestre el número de razas para cada color. Cambia el color de varios perros a 'Multicolor' 
-- y verifica cómo afecta los resultados en la vista.
CREATE VIEW AS
SELECT color, COUNT(*) AS numeroRazas
FROM perros
GROUP BY color

-- # ### Ejercicio 14
-- # **Consigna**: Crea una vista que liste las razas y sus estaturas medias, 
-- pero solo para aquellas razas con estaturas superiores a 50 cm. 
-- Disminuye la estatura media del 'Rottweiler' y verifica si se refleja en la vista.
CREATE VIEW AS
SELECT razas, estatura_media
FROM perros
WHERE estatura_media > 50;


-- # ### Ejercicio 15
-- # **Consigna**: Crea una vista que muestre el origen y el número total de razas de cada origen, ordenados de menor a mayor. 
-- Agrega nuevas razas al origen 'Alemania' y verifica cómo se actualiza la vista.

SELECT origen,COUNT(raza)
FROM perros
GROUP by origen
ORDER BY COUNT(raza) ASC;

