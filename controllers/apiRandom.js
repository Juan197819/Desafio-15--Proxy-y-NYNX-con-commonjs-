const fork = require('child_process').fork;
const arg = require('../servidorHBS.js')
const calculo = require('./childProcess.js');

const apiRandom = (req, res) => {
    const cant = req.query.cant
    console.log('arg.CLUSTER')
    console.log(arg.CLUSTER)

    if (!arg.cluster&&!arg.CLUSTER&&!arg.FORK&&!arg.fork) {

//EN MODO FORK NATIVO (c/node, nodemon o forever) SE LEVANTA UN CHILD PROCESS ANTES DE EJECUTAR CALCULO
//EL ARGUMENTO arg.FORK SOLO SE AGREGA CUANDO SE USA PM2 FORK +CLUSTER 
        const secun = fork(__dirname + '/childProcess.js')
        secun.send(`${cant}`) 
        secun.on('message', obj=>{
            res.send( `PUERTO: ${arg.port}, PID: ${secun.pid} 
              `+ JSON.stringify(obj)); 

           console.log(secun.pid)
            secun.kill()
        })
    } else{
                //EN MODO CLUSTER NATIVO o CLUSTER + FORK de PM2 SE EJECUTA DIRECTAMENTE

        const cantParse = (Number(cant))
        let objeto;
        if (!isNaN(cantParse)) {
            objeto = calculo(cant)
        } else {
            objeto = calculo(1e8)
        }
        
        res.send( `PUERTO: ${arg.port}, PID: ${process.pid}   `+ JSON.stringify(objeto)); 
    }   
}
module.exports =  apiRandom