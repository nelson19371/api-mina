
const databaseService = () =>{

    const knex = require('knex') ({
        client: 'mysql',
        connection:{
            host : process.env.DB_HOST,
            port : 6097,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB,
        }
    });
    const table = 'employee'
    const crearEmployee = ({name,fecha,ubicacion}) =>{
        return knex(table).insert({
            name:name,
            fecha:fecha,
            ubicacion

        });
    };

    return {
        crearEmployee
    };

};

module.exports = {
    databaseService
}
