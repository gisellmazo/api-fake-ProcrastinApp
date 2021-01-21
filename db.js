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
                
            }
        ]
    }

    return data;
}
