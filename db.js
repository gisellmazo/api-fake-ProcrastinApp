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
                    {"id":"2","tarea" : "Hacer tarea de Historia"},
                    {"id":"3","tarea" : "Estudiar Inglés"},
                    {"id":"4","tarea" : "Ejercitarme"},
                    {"id":"4","tarea" : "Leer libro pendiente"},
                ]
                
            }
        ]
    }

    return data;
}