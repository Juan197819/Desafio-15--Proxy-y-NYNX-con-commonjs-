const ContenedorMongoDb = require('../../contenedores/contenedorMongoDB.js');
const mongoose = require('mongoose');

const schemaProductos= new mongoose.Schema({
    timestamp: {type: Number, required: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    codigo: {type: String, required: true, unique: true},
    foto: {type: String, required: true, unique: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
})

 class DaoProductosMongo extends ContenedorMongoDb{
    constructor(){
        super('Productos', schemaProductos)
    }
}

module.exports = DaoProductosMongo