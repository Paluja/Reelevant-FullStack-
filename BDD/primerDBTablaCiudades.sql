-- Creacion Base de Datos:
CREATE DATABASE PrimerBaseDeDatos;

-- Nos ubicamos en la Base de Datos:
use PrimerBaseDeDatos;

-- Creamos la Tabla Ciudades con algunos campos:
CREATE TABLE Ciudades (
    nombre VARCHAR(50) NOT NULL,
    provincia VARCHAR(50) NOT NULL,
    comunidad VARCHAR(50) NOT NULL
);

-- Agregamos mas campos a la Tabla Ciudades:
ALTER TABLE Ciudades
ADD poblacion INT,
ADD codigo_postal VARCHAR(20);

-- Insertamos un primer registro en la Tabla:

INSERT INTO Ciudades (nombre, provincia, comunidad, poblacion, codigo_postal) VALUES
('Madrid', 'Madrid', 'Madrid', 3223334, '28001');

-- Agregamos mas registros de forma simultanea:

INSERT INTO Ciudades (nombre, provincia, comunidad, poblacion, codigo_postal) VALUES
('Barcelona', 'Barcelona', 'Cataluña', 1620343, '08001'),
('Valencia', 'Valencia', 'Valenciana', 790201, '46001'),
('Sevilla', 'Sevilla', 'Andalucía', 688711, '41001'),
('Zaragoza', 'Zaragoza', 'Aragón', 666880, '50001'),
('Málaga', 'Málaga', 'Andalucía', 578000, '29001'),
('Murcia', 'Murcia', 'Región de Murcia', 447182, '30001'),
('Palma', 'Islas Baleares', 'Islas Baleares', 416065, '07001'),
('Las Palmas de Gran Canaria', 'Las Palmas', 'Canarias', 378998, '35001'),
('Bilbao', 'Vizcaya', 'País Vasco', 345821, '48001'),
('Alicante', 'Alicante', 'Valenciana', 334887, '03001'),
('Córdoba', 'Córdoba', 'Andalucía', 325701, '14001'),
('Valladolid', 'Valladolid', 'Castilla y León', 298412, '47001'),
('Vitoria-Gasteiz', 'Álava', 'País Vasco', 252571, '01001'),
('La Coruña', 'La Coruña', 'Galicia', 246056, '15001'),
('Granada', 'Granada', 'Andalucía', 232462, '18001'),
('Oviedo', 'Asturias', 'Principado de Asturias', 220020, '33001'),
('Santa Cruz de Tenerife', 'Santa Cruz de Tenerife', 'Canarias', 207312, '38001'),
('Pamplona', 'Navarra', 'Foral de Navarra', 201653, '31001'),
('Almería', 'Almería', 'Andalucía', 196851, '04001'),
('San Sebastián', 'Guipúzcoa', 'País Vasco', 187415, '20001'),
('Burgos', 'Burgos', 'Castilla y León', 175821, '09001'),
('Santander', 'Cantabria', 'Cantabria', 172044, '39001'),
('Castellón de la Plana', 'Castellón', 'Comunidad Valenciana', 170990, '12001'),
('Logroño', 'La Rioja', 'La Rioja', 150876, '26001'),
('Badajoz', 'Badajoz', 'Extremadura', 150376, '06001'),
('Huelva', 'Huelva', 'Andalucía', 144258, '21001'),
('Salamanca', 'Salamanca', 'Castilla y León', 143978, '37001'),
('Lérida', 'Lérida', 'Cataluña', 138956, '25001'),
('Tarragona', 'Tarragona', 'Cataluña', 134515, '43001'),
('León', 'León', 'Castilla y León', 124303, '24001'),
('Cádiz', 'Cádiz', 'Andalucía', 116979, '11001'),
('Jaén', 'Jaén', 'Andalucía', 112999, '23001'),
('Orense', 'Orense', 'Galicia', 105000, '32001'),
('Gerona', 'Gerona', 'Cataluña', 101852, '17001'),
('Lugo', 'Lugo', 'Galicia', 98268, '27001'),
('Cáceres', 'Cáceres', 'Extremadura', 96069, '10001'),
('Melilla', 'Melilla', 'Melilla', 86487, '52001'),
('Ceuta', 'Ceuta', 'Ceuta', 84202, '51001'),
('Toledo', 'Toledo', 'Castilla-La Mancha', 83684, '45001'),
('Pontevedra', 'Pontevedra', 'Galicia', 83000, '36001'),
('Palencia', 'Palencia', 'Castilla y León', 78000, '34001'),
('Ciudad Real', 'Ciudad Real', 'Castilla-La Mancha', 75071, '13001'),
('Zamora', 'Zamora', 'Castilla y León', 61606, '49001'),
('Ávila', 'Ávila', 'Castilla y León', 58000, '05001'),
('Cuenca', 'Cuenca', 'Castilla-La Mancha', 55000, '16001'),
('Segovia', 'Segovia', 'Castilla y León', 52000, '40001'),
('Soria', 'Soria', 'Castilla y León', 39000, '42001'),
('Teruel', 'Teruel', 'Aragón', 35000, '44001'),
('Huesca', 'Huesca', 'Aragón', 52000, '22001'),
('Guadalajara', 'Guadalajara', 'Castilla-La Mancha', 85000, '19001'),
('Albacete', 'Albacete', 'Castilla-La Mancha', 172000, '02001'),
('Sant Cugat del Vallès', 'Barcelona', 'Cataluña', 89000, '08172'),
('Marbella', 'Málaga', 'Andalucía', 147600, '29601'),
('Dos Hermanas', 'Sevilla', 'Andalucía', 132100, '41700'),
('Mataró', 'Barcelona', 'Cataluña', 126988, '08301'),
('Fuengirola', 'Málaga', 'Andalucía', 81765, '29640'),
('Elche', 'Alicante', 'Valenciana', 230112, '03201'),
('Gijón', 'Asturias', 'Principado de Asturias', 271780, '33201'),
('Vigo', 'Pontevedra', 'Galicia', 297332, '36201'),
('Hospitalet de Llobregat', 'Barcelona', 'Cataluña', 257038, '08901'),
('A Coruña', 'La Coruña', 'Galicia', 244810, '15001'),
('Gran Canaria', 'Las Palmas', 'Canarias', 838397, '35001'),
('El Prat de Llobregat', 'Barcelona', 'Cataluña', 64305, '08820'),
('Sabadell', 'Barcelona', 'Cataluña', 208544, '08201'),
('Santa Coloma de Gramenet', 'Barcelona', 'Cataluña', 117153, '08921');
-- Consultas:
-- 1. **Selección Básica:** Seleccionar todos los campos de todas las ciudades.
  
   SELECT * FROM Ciudades;
   SELECT nombre, poblacion FROM Ciudades;
-- 2. **Selección con Condición (WHERE):** Seleccionar ciudades con una población mayor a 500,000.
   
   SELECT * FROM Ciudades WHERE poblacion > 500000;
   
-- 3. **Selección con Múltiples Condiciones (AND):** Seleccionar ciudades en Andalucía con población mayor a 200,000.
   
   SELECT * FROM Ciudades WHERE comunidad = 'Andalucía' AND poblacion > 200000;
   
-- 4. **Selección con Múltiples Condiciones (OR):** Seleccionar ciudades en Cataluña o Madrid.
   
   SELECT * FROM Ciudades WHERE comunidad = 'Cataluña' OR comunidad = 'Madrid';
   
-- 5. **Valores Distintos (DISTINCT):** Listar todas las provincias distintas.
   
   SELECT DISTINCT provincia FROM Ciudades;
   
-- 6. **Contar Registros (COUNT):** Contar el número total de ciudades.
   
   SELECT COUNT(*) FROM Ciudades;
   SELECT COUNT(*) FROM Ciudades WHERE comunidad = 'Andalucia';
-- 7. **Sumar Valores (SUM):** Calcular la población total de todas las ciudades.
   
   SELECT SUM(poblacion) FROM Ciudades;
   
-- 8. **Promedio (AVG):** Calcular la población promedio de las ciudades.
   
   SELECT AVG(poblacion) FROM Ciudades;
   -- redondeo de decimales
   SELECT round(AVG(pobalcion),2) FROM Ciudades;
-- 9. **Valor Máximo (MAX):** Encontrar la mayor población en las ciudades.
   
   SELECT MAX(poblacion) FROM Ciudades;
   
-- 10. **Valor Mínimo (MIN):** Encontrar la menor población en las ciudades.
    
    SELECT MIN(poblacion) FROM Ciudades;
    
-- 11. **Agrupar y Contar (GROUP BY con COUNT):** Contar el número de ciudades en cada comunidad.
    
    
    SELECT comunidad, COUNT(*) as cantidad FROM Ciudades GROUP BY comunidad;
-- 12. **Agrupar y Sumar (GROUP BY con SUM):** Sumar la población de las ciudades en cada comunidad.
    
    SELECT comunidad, SUM(poblacion) FROM Ciudades GROUP BY comunidad;
    
-- 13. **Agrupar y Calcular Promedio (GROUP BY con AVG):** Calcular la población promedio en cada provincia.
    
    SELECT provincia, AVG(poblacion) as promedio_pobalcion FROM Ciudades GROUP BY provincia;
    
   
   
-- 14. **Combinar DISTINCT y WHERE:** Listar provincias que tienen ciudades con más de 100,000 habitantes.
    
    SELECT DISTINCT provincia FROM Ciudades WHERE poblacion > 100000;
    

    
    
