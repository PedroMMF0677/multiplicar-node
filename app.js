//requireds
//const fs = require('fs');
//const fs = require('expres');
const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => {
                console.log(`Archivo creado: ${mensaje.blue}`);
            })
            .catch(e => console.log(e))
        break;
    default:
        break;
}