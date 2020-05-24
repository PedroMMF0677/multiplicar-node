const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear el archivo de texto en la carpeta tablas con la tabla de multiplicar', opts)
    .help()
    .argv; //Paquete Yargs


module.exports = {
    argv
}