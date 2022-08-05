const ContenedorFirebase = require('../../contenedores/contenedorFirebase.js');
class DaoMensajesFirebase extends ContenedorFirebase{
    constructor(){
        super('Mensajes')
    }
}

module.exports = DaoMensajesFirebase
