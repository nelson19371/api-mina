module.exports = function(app, databaseService){


    app.get('/',(request, response) =>{
        response.status(200).json({"mensaje":"Todo bien"});

    });

    app.get('/employees',(request, response) =>{
        response.status(200).json({"mensaje":"Mis lenguajes"});

    });



    app.post('/employees', (request, response) =>{
        const newEmployee = request.body;
        console.log(newEmployee);

        databaseService.crearEmployee(newEmployee)
            .then(()=>{
                response.json({"mensaje": "Employee creado"})
            })

        
    });

};