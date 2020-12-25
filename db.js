const FAKER = require('faker')

module.exports = () => {
    const data ={
        "users" : [
            {
                "id" : "1",
                "name" : "Gisell",
                "lastname": "Mazo",
                "email" : "gisellmazo@gmail.com",
                "user" : "gisellmazo13",
                "password" : "1214743656",
                "tasks" : 
                    {
                        "task1" : "Hacer tarea de Historia",
                        "task2" : "Estudiar Inglés",
                        "task3" : "Ejercitarme",
                        "task4" : "Leer libro pendiente"
                    },
                
            }
        ]
    }

    return data;
}