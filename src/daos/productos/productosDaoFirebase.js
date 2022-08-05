const ContenedorFirebase = require('../../contenedores/contenedorFirebase.js');
class DaoProductosFirebase extends ContenedorFirebase{
    constructor(){
        super('Productos')
    }
}

module.exports = DaoProductosFirebase
