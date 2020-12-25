const FAKER = require('faker')

module.exports = () => {
    const data ={
        "usuarios" : [
            {
                "id" : "1",
                "nombre" : "Gisell Mazo",
                "correo" : "gisellmazo@gmail.com",
                "usuario" : "gisellmazo13",
                "contraseña" : "1214743656",
                "tareas" : [
                    {"tarea" : "Hacer tarea de Historia",
                    "tarea" : "Estudiar Inglés",
                    "tarea" : "Ejercitarme",
                    "tarea" : "Leer libro pendiente"},
                ]
                
            }
        ]
    }

    return data;
}