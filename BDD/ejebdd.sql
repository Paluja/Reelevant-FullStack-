-- Crear vista que muestre la raza y el peso_medio de los perros cuyo peso_medio se mayor que 20
CREATE VIEW VistaPesoMedio AS
SELECT raza, peso_medio
FROM Perros
WHERE peso_medio > 20;