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
                "tasks" : [
                    {
                        "id": "2",
                        "task": "Hacer tarea de Historia"
                    },
                    {
                        "id": "3",
                        "task": "Estudiar Inglés"
                    },
                    {
                        "id": "4",
                        "task": "Ejercitarme"
                    }
                ]
                
            },
            {
                "id" : "2",
                "name" : "Maria",
                "lastname": "Santos",
                "email" : "msantospineda1@gmail.com",
                "user" : "satsuma",
                "password" : "123456789",
                "tasks" : [
                    {
                        "id": "2",
                        "task": "Hacer tarea de Matematicas"
                    },
                    {
                        "id": "3",
                        "task": "Estudiar Alemán"
                    },
                    {
                        "id": "4",
                        "task": "Hacer yoga"
                    },
                    {
                        "id": "5",
                        "task": "Leer libro"
                    },
                ]
                
            }
        ]
    }

    return data;
}
