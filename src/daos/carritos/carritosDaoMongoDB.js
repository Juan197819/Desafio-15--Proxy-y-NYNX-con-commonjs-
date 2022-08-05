const ContenedorMongoDb = require('../../contenedores/contenedorMongoDB.js');
const mongoose = require('mongoose');
const schemaCarritos= new mongoose.Schema({
    
    timestamp: {type: Number, required: true},
    productos:{type: Array, required: true}
})
class DaoCarritosMongo extends ContenedorMongoDb{
    constructor(){
        super('Carritos', schemaCarritos)
    }
}



module.exports = DaoCarritosMongo
