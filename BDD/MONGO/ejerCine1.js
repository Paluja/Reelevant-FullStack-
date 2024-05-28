// 1. Películas con rating entre 8.0 y 9.0:
db.películas.find({'rating':{$lt:9.0}}).sort({'rating':1})

// 2. Películas dirigidas por Christopher Nolan o del género "Acción":
db.películas.find({$or: [{'director.nombre':' Christopher Nolan'},{'género':'Acción'}]})

// 3. Películas de "Ciencia ficción" o "Animación", ordenadas por año:
db.películas.find({'género':{$in: ['Ciencia ficción', 'Animiación']}}).sort({'año':1})

// 4. Directores con al menos tres películas en su filmografía:
db.directores.find({'películas':{$size:3}})

// 5. Actualizar el nombre del director de "El Caballero Oscuro":
db.directores.find({'películas':{$size:3}})

// 6. Películas protagonizadas por Tom Hanks o Meryl Streep, 1990-2015:
db.películas.find({
    'actores.nombre': { $in: ['Tom Hanks', 'Meryl Streep'] },
    'año': { $gte: 1990, $lte: 2015 }
});
// 7. Películas de "Acción" o "Ciencia ficción", calificadas >= 8.0 desde 2010:
db.películas.find({
    'género':{$in: ["Acción","Ciencia Ficción"]},
    'rating':{$gte:8.0},
    'año':{$gt:2010}
})

// 8. Películas dirigidas por Quentin Tarantino o Martin Scorsese, de "Crimen" o "Drama":
db.películas.find({
    'director.nombre':{$in:["Quentin Tarantino","Martin Scorsese"]},
    'género':{$in:["Crimen","Drama"]},

})
// 9. Directores nacidos entre 1960 y 1980, ordenados alfabéticamente:
db.directores.find({
    'fecha_nacimiento':{$gt:"1960-01-01", $lt:"1980-01-01"}
}).sort({
    'nombre':1
})

// 10. Películas recientes de "Animación", calificadas >= 8.0, desde 2010

// 11. Actualizar la nacionalidad de todos los directores nacidos antes de 1960:
// 12. Películas dirigidas por Christopher Nolan o protagonizadas por Leonardo DiCaprio, desde
// 2000:
// 13. Películas de "Romance" o "Comedia dramática", 1990-2020:
// 14. Películas dirigidas por Steven Spielberg con calificación menor a 8.0:
// 15. Actores que hayan trabajado en "Titanic" e "Inception":
// 16. Actores más jóvenes, ordenados por fecha de nacimiento:
// 17. Películas con un rating menor a 8.0 o lanzadas antes de 2000:
// 18. Encontrar a los directores que hayan dirigido películas de al menos tres géneros distintos:
// 19. Actualizar la calificación de las películas protagonizadas por actores con múltiples premios:
// 20. Encontrar películas del género "Aventura" o "Ciencia ficción", lanzadas después de 2000, y
// clasificarlas por año en orden descendente:
// 21. Encontrar directores nacidos en una región específica y que hayan trabajado con actores
// de nacionalidad distinta:
// 22. Encontrar películas de "Drama" o "Romance" que hayan sido premiadas, excluyendo
// directores específicos:
