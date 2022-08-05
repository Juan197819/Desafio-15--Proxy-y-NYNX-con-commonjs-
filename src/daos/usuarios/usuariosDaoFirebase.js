const ContenedorFirebase = require('../../contenedores/contenedorFirebase.js');
class DaoUsuariosFirebase extends ContenedorFirebase{
    constructor(){
        super('Usuarios')
    }
}

module.exports = DaoUsuariosFirebase
