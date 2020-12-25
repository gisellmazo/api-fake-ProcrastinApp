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
                    {
                        "tarea1" : "Hacer tarea de Historia",
                        "tarea2" : "Estudiar Inglés",
                        "tarea3" : "Ejercitarme",
                        "tarea4" : "Leer libro pendiente"
                    }
                ],
                
            }
        ]
    }

    return data;
}