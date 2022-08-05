require('dotenv/config');

let daoCarrito,daoProducto,daoMensaje,daoUsuario
console.log(`Persistencia elegida via archivo .env:  ${process.env.PERSISTENCIA}`)

switch (process.env.PERSISTENCIA) {
    case 'mongodb':
        const {default: DaoProductosMongo}=  require('./daos/productos/productosDaoMongoDB.js'); 
        const {default: DaoCarritosMongo} =  require('./daos/carritos/carritosDaoMongoDB.js');   
        const {default: DaoMensajesMongo} =  require('./daos/mensajes/mensajesDaoMongoDB.js');
        const {default: DaoUsuariosMongo} =  require('./daos/usuarios/usuariosDaoMongoDB.js');
        
        daoProducto= new DaoProductosMongo() 
        daoCarrito = new DaoCarritosMongo()
        daoMensaje = new DaoMensajesMongo()
        daoUsuario = new DaoUsuariosMongo() 

    break;

    case 'firebase':
        const DaoProductosFirebase=  require('./daos/productos/productosDaoFirebase.js');   
        const DaoCarritosFirebase=  require('./daos/carritos/carritosDaoFirebase.js');
        const DaoMensajesFirebase=  require('./daos/mensajes/mensajesDaoFirebase.js');    
        const DaoUsuariosFirebase=  require('./daos/usuarios/usuariosDaoFirebase.js');

        console.log(DaoProductosFirebase)
        daoProducto= new DaoProductosFirebase()
        daoCarrito = new DaoCarritosFirebase()
        daoMensaje = new DaoMensajesFirebase()
        daoUsuario = new DaoUsuariosFirebase()

    break;

    default:
        break;
}

module.exports = {daoProducto,daoCarrito,daoMensaje, daoUsuario}