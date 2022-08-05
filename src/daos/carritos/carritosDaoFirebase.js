const ContenedorFirebase = require('../../contenedores/contenedorFirebase.js');
class DaoCarritosFirebase extends ContenedorFirebase{
    constructor(){
        super('Carritos')
    }
}

module.exports = DaoCarritosFirebase
