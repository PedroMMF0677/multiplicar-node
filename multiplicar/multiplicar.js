//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    //return new Promise((resolve, reject) => {
    if (!Number(base)) {
        throw new Error(`El valor base introducido ${base} no es un numero`);
        return;
    }

    for (let contador = 1; contador <= limite; contador++) {
        console.log(`${base} * ${contador} = ${base*contador}`)
    }
    //})
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tablas-${ base }-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(`no se pudo crear el archivo tabla-${ base }`)
            } else {
                resolve(`tabla-${ base }-al-${limite}.txt`)
            }
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
};