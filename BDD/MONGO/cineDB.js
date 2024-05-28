




//  Colección películas


db.películas.insertMany([
    {
        título: "El Padrino",
        año: 1972,
        director: {
            nombre: "Francis Ford Coppola",
            fecha_nacimiento: "1939-04-07",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Marlon Brando",
                fecha_nacimiento: "1924-04-03",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Al Pacino",
                fecha_nacimiento: "1940-04-25",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Drama",
        rating: 9.2
    },
    {
        título: "Pulp Fiction",
        año: 1994,
        director: {
            nombre: "Quentin Tarantino",
            fecha_nacimiento: "1963-03-27",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "John Travolta",
                fecha_nacimiento: "1954-02-18",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Uma Thurman",
                fecha_nacimiento: "1970-04-29",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Crimen",
        rating: 8.9
    },
    {
        título: "La Lista de Schindler",
        año: 1993,
        director: {
            nombre: "Steven Spielberg",
            fecha_nacimiento: "1946-12-18",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Liam Neeson",
                fecha_nacimiento: "1952-06-07",
                nacionalidad: "Irlandés"
            },
            {
                nombre: "Ralph Fiennes",
                fecha_nacimiento: "1962-12-22",
                nacionalidad: "Británico"
            }
        ],
        género: "Historia",
        rating: 9.0
    },
    {
        título: "El Señor de los Anillos: La Comunidad del Anillo",
        año: 2001,
        director: {
            nombre: "Peter Jackson",
            fecha_nacimiento: "1961-10-31",
            nacionalidad: "Neozelandés"
        },
        actores: [
            {
                nombre: "Elijah Wood",
                fecha_nacimiento: "1981-01-28",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Ian McKellen",
                fecha_nacimiento: "1939-05-25",
                nacionalidad: "Británico"
            }
        ],
        género: "Fantasía",
        rating: 8.8
    },
    {
        título: "Inception",
        año: 2010,
        director: {
            nombre: "Christopher Nolan",
            fecha_nacimiento: "1970-07-30",
            nacionalidad: "Británico"
        },
        actores: [
            {
                nombre: "Leonardo DiCaprio",
                fecha_nacimiento: "1974-11-11",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Joseph Gordon-Levitt",
                fecha_nacimiento: "1981-02-17",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Ciencia ficción",
        rating: 8.7
    },
    {
        título: "Gladiador",
        año: 2000,
        director: {
            nombre: "Ridley Scott",
            fecha_nacimiento: "1937-11-30",
            nacionalidad: "Británico"
        },
        actores: [
            {
                nombre: "Russell Crowe",
                fecha_nacimiento: "1964-04-07",
                nacionalidad: "Neozelandés"
            },
            {
                nombre: "Joaquin Phoenix",
                fecha_nacimiento: "1974-10-28",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Acción",
        rating: 8.5
    },
    {
        título: "Titanic",
        año: 1997,
        director: {
            nombre: "James Cameron",
            fecha_nacimiento: "1954-08-16",
            nacionalidad: "Canadiense"
        },
        actores: [
            {
                nombre: "Leonardo DiCaprio",
                fecha_nacimiento: "1974-11-11",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Kate Winslet",
                fecha_nacimiento: "1975-10-05",
                nacionalidad: "Británica"
            }
        ],
        género: "Romance",
        rating: 7.8
    },
    {
        título: "Forrest Gump",
        año: 1994,
        director: {
            nombre: "Robert Zemeckis",
            fecha_nacimiento: "1951-05-14",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Tom Hanks",
                fecha_nacimiento: "1956-07-09",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Robin Wright",
                fecha_nacimiento: "1966-04-08",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Comedia dramática",
        rating: 8.8
    },
    {
        título: "Star Wars: Una nueva esperanza",
        año: 1977,
        director: {
            nombre: "George Lucas",
            fecha_nacimiento: "1944-05-14",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Mark Hamill",
                fecha_nacimiento: "1951-09-25",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Harrison Ford",
                fecha_nacimiento: "1942-07-13",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Ciencia ficción",
        rating: 8.6
    },
    {
        título: "Jurassic Park",
        año: 1993,
        director: {
            nombre: "Steven Spielberg",
            fecha_nacimiento: "1946-12-18",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Sam Neill",
                fecha_nacimiento: "1947-09-14",
                nacionalidad: "Neozelandés"
            },
            {
                nombre: "Laura Dern",
                fecha_nacimiento: "1967-02-10",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Ciencia ficción",
        rating: 8.1
    },
    {
        título: "Matrix",
        año: 1999,
        director: {
            nombre: "Lana Wachowski",
            fecha_nacimiento: "1965-06-21",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Keanu Reeves",
                fecha_nacimiento: "1964-09-02",
                nacionalidad: "Canadiense"
            },
            {
                nombre: "Laurence Fishburne",
                fecha_nacimiento: "1961-07-30",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Ciencia ficción",
        rating: 8.7
    },
    {
        título: "El Caballero Oscuro",
        año: 2008,
        director: {
            nombre: "Christopher Nolan",
            fecha_nacimiento: "1970-07-30",
            nacionalidad: "Británico"
        },
        actores: [
            {
                nombre: "Christian Bale",
                fecha_nacimiento: "1974-01-30",
                nacionalidad: "Británico"
            },
            {
                nombre: "Heath Ledger",
                fecha_nacimiento: "1979-04-04",
                nacionalidad: "Australiana"
            }
        ],
        género: "Acción",
        rating: 9.0
    },
    {
        título: "Coco",
        año: 2017,
        director: {
            nombre: "Lee Unkrich",
            fecha_nacimiento: "1967-08-08",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Anthony Gonzalez",
                fecha_nacimiento: "2004-09-23",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Gael García Bernal",
                fecha_nacimiento: "1978-11-30",
                nacionalidad: "Mexicana"
            }
        ],
        género: "Animación",
        rating: 8.4
    },
    {
        título: "Avengers: Endgame",
        año: 2019,
        director: {
            nombre: "Anthony Russo",
            fecha_nacimiento: "1970-02-03",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Robert Downey Jr.",
                fecha_nacimiento: "1965-04-04",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Chris Evans",
                fecha_nacimiento: "1981-06-13",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Acción",
        rating: 8.4
    },
    {
        título: "Toy Story",
        año: 1995,
        director: {
            nombre: "John Lasseter",
            fecha_nacimiento: "1957-01-12",
            nacionalidad: "Estadounidense"
        },
        actores: [
            {
                nombre: "Tom Hanks",
                fecha_nacimiento: "1956-07-09",
                nacionalidad: "Estadounidense"
            },
            {
                nombre: "Tim Allen",
                fecha_nacimiento: "1953-06-13",
                nacionalidad: "Estadounidense"
            }
        ],
        género: "Animación",
        rating: 8.3
    },
    {
        título: "Parásitos",
        año: 2019,
        director: {
            nombre: "Bong Joon-ho",
            fecha_nacimiento: "1969-09-14",
            nacionalidad: "Coreano"
        },
        actores: [
            {
                nombre: "Song Kang-ho",
                fecha_nacimiento: "1967-01-17",
                nacionalidad: "Coreano"
            },
            {
                nombre: "Choi Woo-shik",
                fecha_nacimiento: "1990-03-26",
                nacionalidad: "Coreano"
            }
        ],
        género: "Suspenso",
        rating: 8.6
    }
])




 Colección Directores




db.directores.insertMany([
    {
        nombre: "Steven Spielberg",
        fecha_nacimiento: "1946-12-18",
        nacionalidad: "Estadounidense",
        películas: [
            "Jurassic Park",
            "Schindler's List",
            "E.T. the Extra-Terrestrial"
        ]
    },
    {
        nombre: "Christopher Nolan",
        fecha_nacimiento: "1970-07-30",
        nacionalidad: "Británico",
        películas: [
            "Inception",
            "Interstellar",
            "The Dark Knight"
        ]
    },
    {
        nombre: "Martin Scorsese",
        fecha_nacimiento: "1942-11-17",
        nacionalidad: "Estadounidense",
        películas: [
            "Goodfellas",
            "The Wolf of Wall Street",
            "Taxi Driver"
        ]
    },
    {
        nombre: "Alfonso Cuarón",
        fecha_nacimiento: "1961-11-28",
        nacionalidad: "Mexicano",
        películas: [
            "Gravity",
            "Roma",
            "Children of Men"
        ]
    },
    {
        nombre: "Greta Gerwig",
        fecha_nacimiento: "1983-08-04",
        nacionalidad: "Estadounidense",
        películas: [
            "Lady Bird",
            "Little Women",
            "Barbie"
        ]
    }
])



 Colección Actores


db.actores.insertMany([
    {
        nombre: "Leonardo DiCaprio",
        fecha_nacimiento: "1974-11-11",
        nacionalidad: "Estadounidense",
        películas: [
            "Inception",
            "The Wolf of Wall Street",
            "Titanic"
        ]
    },
    {
        nombre: "Meryl Streep",
        fecha_nacimiento: "1949-06-22",
        nacionalidad: "Estadounidense",
        películas: [
            "The Devil Wears Prada",
            "Mamma Mia!",
            "Kramer vs. Kramer"
        ]
    },
    {
        nombre: "Denzel Washington",
        fecha_nacimiento: "1954-12-28",
        nacionalidad: "Estadounidense",
        películas: [
            "Training Day",
            "Flight",
            "Fences"
        ]
    },
    {
        nombre: "Tom Hanks",
        fecha_nacimiento: "1956-07-09",
        nacionalidad: "Estadounidense",
        películas: [
            "Forrest Gump",
            "Saving Private Ryan",
            "Cast Away"
        ]
    },
    {
        nombre: "Emma Stone",
        fecha_nacimiento: "1988-11-06",
        nacionalidad: "Estadounidense",
        películas: [
            "La La Land",
            "Easy A",
            "The Help"
        ]
    },
    {
        nombre: "Robert De Niro",
        fecha_nacimiento: "1943-08-17",
        nacionalidad: "Estadounidense",
        películas: [
            "Taxi Driver",
            "The Irishman",
            "Raging Bull"
        ]
    },
    {
        nombre: "Natalie Portman",
        fecha_nacimiento: "1981-06-09",
        nacionalidad: "Estadounidense",
        películas: [
            "Black Swan",
            "V for Vendetta",
            "Jackie"
        ]
    },
    {
        nombre: "Samuel L. Jackson",
        fecha_nacimiento: "1948-12-21",
        nacionalidad: "Estadounidense",
        películas: [
            "Pulp Fiction",
            "Django Unchained",
            "The Avengers"
        ]
    },
    {
        nombre: "Saoirse Ronan",
        fecha_nacimiento: "1994-04-12",
        nacionalidad: "Irlandesa",
        películas: [
            "Little Women",
            "Lady Bird",
            "Brooklyn"
        ]
    },
    {
        nombre: "Joaquin Phoenix",
        fecha_nacimiento: "1974-10-28",
        nacionalidad: "Estadounidense",
        películas: [
            "Joker",
            "Gladiator",
            "Her"
        ]
    }
])






 Actividad 1: Encontrar todas las películas dirigidas por "Christopher Nolan".

 db.películas.find({"director.nombre":"Christopher Nolan"})


 Actividad 2: Encontrar a todos los actores nacidos después de 1980.
 db.actores.find({"fecha_nacimiento":{$gt:"1980-01-01"}})



 Actividad 3: Actualizar la nacionalidad de "Tom Hanks" a "Canadiense".
 db.actores.updateOne({"nombre":'Tom Hanks'}, {$set: {"nacionalidad":'Canadiense'}})



 Actividad 4: Actualizar el rating de todas las películas de género "Acción" a 9.5.
 db.películas.updateMany({'género':'Acción'}, {$set: {"rating":9.5}})



 Actividad 5: Encontrar las películas con un rating mayor a 9.0.
 db.películas.find({"rating":{$gt:9}})



 Actividad 6: Ordenar los directores por fecha de nacimiento en orden ascendente.
 cine> db.directores.find().sort({"fecha_nacimiento":1})



 Actividad 7: Ordenar las películas por rating en orden descendente y limitar a 5 resultados.
 db.películas.find().sort({"rating": -1}).limit(5)

 Actividad 8: Agregar un nuevo actor a la colección `actores`.
db.actores.insertOne({
    nombre: "Brad Pitt",
    fecha_nacimiento: "1963-12-18",
    nacionalidad: "Estadounidense",
    películas: [
        "Fight Club",
        "Se7en",
        "Inglourious Basterds"
    ]

})



 Actividad 9: Actualizar el género de una película específica a "Suspenso".
db.películas.updateOne({"título":"Inception"}, {$set: {"género":"Susupenso"}})



 Actividad 10: Eliminar todas las películas con un rating menor a 8.0.