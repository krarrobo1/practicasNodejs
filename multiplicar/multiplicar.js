const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {
        if (!Number(base)) rej(`El valor ${base} no es un numero`);
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, 'utf8', (err) => {
            if (err) rej(err);
            else res(`tabla-${base}.txt`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    console.log('==========================='.green);
    console.log(`*******Tabla de ${base}*******`.green);
    console.log('==========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};
//exports.crearArchivo = crearArchivo;
module.exports = {
    crearArchivo,
    listarTabla
}