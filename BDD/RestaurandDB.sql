-- Base de datos  'restaurant'
CREATE DATABASE IF NOT EXISTS `restaurant`;


-- PRIMARY KEY --- AUTO INCREMENT

USE `restaurant`;


-- —--------------------------------------------------------
CREATE TABLE t3 (id INT UNSIGNED NOT NULL, c INT);


ALTER TABLE t3 DROP id;


ALTER TABLE t3 ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT, ADD PRIMARY KEY (id);


DROP TABLE t3;


ALTER TABLE t3 ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY (id);




-- Para cambiar el incremento solo para la sesión actual
SET @@session.auto_increment_increment = 2;


INSERT INTO `t3` ( `c`) VALUES (2), (5);


select * from t3;


SET @@session.auto_increment_increment = 1;


DROP TABLE t3;


-- —--------------------------------------------------------


-- Creación de la tabla clientes
CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- or


DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




DROP TABLE IF EXISTS `platillos`;
CREATE TABLE `platillos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `disponible` tinyint DEFAULT NULL,
  `categoriaId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriaId` (`categoriaId`),
  CONSTRAINT `platillos_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;





DROP TABLE IF EXISTS `clientes`;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `numero de mesa` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `reservaciones`;
CREATE TABLE `reservaciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hora` time DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `cantidad de mesas` int DEFAULT NULL,
  `clienteId` int  NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clienteId` (`clienteId`),
  CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `categoria` (`id`, `nombre`) VALUES 
('1', 'Desayunos'),
('2', 'Comida'),
('3', 'Bebidas'),
('4', 'Bebidas con Alcohol'),
('5', 'Postres'),
('6', 'Ensaladas');


INSERT INTO `platillos` (`id`, `nombre`, `precio`, `disponible`, `categoriaId`) VALUES ('1', 'Pastel de Chocolate', '89', '1', '5'),
('2', '400g de Rib Eye', '199', '1', '2'),
('3', 'Refresco', '25', '1', '3'),
('4', 'Café Americano', '35', '1', '3'),
('5', 'Tequila', '89', '1', '4'),
('6', 'Vodka con Jugo', '119', '1', '4'),
('7', 'Hot Cakes (3)', '119', '1', '1'),
('8', 'Omellete', '89', '0', '1'),
('9', 'Pastel de Zanahoria', '89', '0', '5'),
('10', 'Rol de Canela', '69', '1', '5'),
('11', 'Agua de Naranja', '79', '1', '3'),
('12', 'Chuletas de Cerdo', '179', '1', '2'),
('13', 'Costillas BBQ', '189', '1', '2'),
('14', 'Huevo al Gusto', '49', '1', '1'),
('15', 'Omellete Hiervas Finas y Queso de Cabra', '79', '1', '1'),
('16', 'Jugo de Zanahoria', '49', '0', '3'),
('17', 'Jugo de Narnaja', '49', '1', '3'),
('18', 'Jugo de Toronja', '49', '1', '3'),
('19', 'Ensalada Violeta', '89', '1', '6'),
('20', 'Ensalada de Higo', '89', '1', '6'),
('21', 'Ensalada Cesar', '89', '0', '6'),
('22', 'Club Sandwich', '99', '1', '1'),
('23', 'Sandwich Salami', '119', '1', '1'),
('24', 'Filete de Pescado Róbalo', '179', '0', '2'),
('25', 'Filete de Atún ', '179', '1', '2'),
('26', 'Milanesa de Pollo', '149', '1', '2'),
('27', 'Pierna de Ternera al Horno', '199', '1', '2'),
('28', 'Café Capuchino', '45', '1', '3'),
('29', 'Café Latte', '50', '1', '3'),
('30', 'Café Expresso', '25', '1', '3'),
('31', 'Vino Tinto Francia', '89', '0', '4'),
('32', 'Vino Tinto Chile', '89', '1', '4'),
('33', 'Vino Tinto México', '89', '1', '4'),
('34', 'Vino Tinto España', '89', '0', '4'),
('35', 'Vino Tinto Argentina', '89', '1', '4');


INSERT INTO `reservaciones` (`id`, `hora`, `fecha`, `cantidad de mesas`, `clienteId`) VALUES 
(1, '10:30:00', '2019-06-28', 3, 10),
(2, '14:00:00', '2019-07-30', 2, 2),
(3, '20:00:00', '2019-06-25', 5, 1),
(4, '19:00:00', '2019-06-25', 2, 3),
(5, '14:00:00', '2019-07-30', 3, 4),
(6, '14:30:00', '2019-06-25', 2, 1),
(7, '10:00:00', '2019-07-01', 3, 5),
(8, '09:00:00', '2019-07-01', 3, 4),
(9, '10:00:00', '2019-07-02', 2, 3),
(10, '19:00:00', '2019-06-28', 3, 5),
(11, '08:00:00', '2019-06-25', 3, 1),
(12, '20:00:00', '2019-07-01', 4, 2),
(13, '09:00:00', '2019-07-30', 3, 3),
(14, '14:30:00', '2019-06-28', 4, 4),
(15, '10:00:00', '2019-07-02', 2, 5),
(16, '14:00:00', '2019-07-30', 3, 6),
(17, '20:00:00', '2019-06-25', 2, 7),
(18, '10:00:00', '2019-07-30', 4, 8),
(19, '14:00:00', '2019-07-01', 2, 9),
(20, '14:00:00', '2019-07-02', 2, 10),
(21, '14:00:00', '2019-07-01', 4, 1),
(22, '10:00:00', '2019-07-02', 3, 2),
(23, '09:00:00', '2019-07-02', 5, 3),
(24, '19:00:00', '2019-06-28', 5, 4),
(25, '09:00:00', '2019-07-01', 3, 5),
(26, '19:00:00', '2019-06-28', 3, 6),
(27, '14:30:00', '2019-07-02', 2, 7),
(28, '09:00:00', '2019-06-28', 2, 8),
(29, '10:00:00', '2019-07-02', 1, 9),
(30, '14:00:00', '2019-07-30', 2, 10),
(31, '20:30:00', '2019-06-25', 3, 3);






INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `numero de mesa`) VALUES
(1, 'Lucía', 'Gómez', '12'),
(2, 'Carlos', 'Martín', '15'),
(3, 'Ana', 'Jiménez', '09'),
(4, 'David', 'López', '22'),
(5, 'Sofía', 'Pérez', '30'),
(6, 'Miguel', 'Sánchez', '18'),
(7, 'Laura', 'Díaz', '05'),
(8, 'Javier', 'Ruiz', '20'),
(9, 'Elena', 'Moreno', '25'),
(10, 'Fernando', 'Alonso', '17');






### Inserciones para verificar `AUTO_INCREMENT`


-- 1. Insertar un nuevo cliente para verificar el incremento automático del ID:
   
   INSERT INTO clientes (nombre, apellido, `numero de mesa`) VALUES ('Juan', 'Fernández', '08');
   
   -- Este comando inserta un nuevo cliente y el `id` debería incrementarse automáticamente. Puedes verificarlo ejecutando un `SELECT` para ver el último `id` ingresado:
   
   SELECT * FROM clientes ORDER BY id DESC LIMIT 1;
   


-- 2. Agregar un nuevo platillo a la categoría de postres:
   
   INSERT INTO platillos (nombre, precio, disponible, categoriaId) VALUES ('Cheesecake de Frambuesa', 95, 1, 5);
   
   -- Inserta un nuevo platillo y comprueba que el `id` ha seguido la secuencia correcta con un `AUTO_INCREMENT`.


### Consultas con condiciones basadas en el `ID`


-- 3. Buscar un platillo específico por su ID:
   
   SELECT * FROM platillos WHERE id = 10;
   
   -- Esta consulta selecciona el platillo cuyo `id` es 10, permitiéndote verificar los detalles específicos del platillo ingresado anteriormente o cualquier otro que corresponda a ese `id`.


-- 4. Obtener la información de una reservación específica usando el ID:
   
   SELECT * FROM reservaciones WHERE id = 5;
   
   -- Busca los detalles de la reservación con el `id` 5 para ver información como la hora, fecha y cantidad de mesas reservadas.


-- 5. Actualizar la disponibilidad de un platillo basándose en su ID:
   
   UPDATE platillos SET disponible = 0 WHERE id = 8;
   SELECT * FROM platillos WHERE id = 8;
   
   -- Este comando actualiza el platillo con el `id` 8 para marcarlo como no disponible (`disponible = 0`) y luego selecciona el mismo para verificar que el cambio fue aplicado correctamente.




### Tabla `categoria`


-- 6. Encontrar la categoría con el máximo ID:
   
   


-- 7. Listar las primeras 3 categorías ordenadas alfabéticamente:
   
 


-- 8. Listar todas las categorías que contengan la letra 'a':
   
'.


### Tabla `platillos`


-- 9. Mostrar todos los platillos disponibles:
   
   


-- 10. Obtener el precio promedio de todos los platillos:
   




-- 11. Encontrar el platillo más caro:
   




-- 12. Listar los 5 platillos más baratos:
   




-- 13. Sumar el precio de todos los platillos de una categoría específica (e.g., Postres):
   
 


-- 14. Listar platillos por categoría con su precio promedio:
   
### Tabla `reservaciones`


-- 15. Mostrar todas las reservaciones para una fecha específica (e.g., 2019-07-30):
   




-- 16. Contar el número de reservaciones para cada fecha:
   




-- 17. Encontrar la cantidad máxima de mesas reservadas en una sola reserva:
   
   


-- 18. Listar reservaciones cuyo número de mesas reservadas es mayor que 3:
   




-- 19. Obtener las últimas 10 reservaciones hechas por orden cronológico:
   
  


-- 20. Encontrar clientes que han hecho más de 2 reservaciones:
  




### Tabla `clientes`


-- 21. Encontrar clientes sin apellidos comunes: 'Pérez', 'López', 'Gómez'






-- 22. -- Calcular el precio promedio de los platillos por categoría, incluir solo categorías con más de un platillo disponible