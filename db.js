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
                     "Hacer tarea de Historia",
                     "Estudiar Inglés",
                    "Ejercitarme",
                    "Leer libro pendiente"
                ]
                
            }
        ]
    }

    return data;
}