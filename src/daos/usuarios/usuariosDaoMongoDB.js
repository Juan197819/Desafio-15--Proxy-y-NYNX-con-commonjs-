const ContenedorMongoDb = require('../../contenedores/contenedorMongoDB.js');
const mongoose = require('mongoose');
const schemaUsuarios= new mongoose.Schema({
    nombre: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
})

 class DaoUsuariosMongo extends ContenedorMongoDb{
    constructor(){
        super('Usuarios', schemaUsuarios)
    }
}

module.exports = DaoUsuariosMongo