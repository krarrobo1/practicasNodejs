const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');
//const argv = require('./config/yargs').argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log('Archivo creado', colors.america(archivo));
            })
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
//let argv2 = process.argv;

//console.log(argv.base);


//let base = param.split('=')[1];
/*


console.log(base);*/