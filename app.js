const {crearArchivo} = require('./Módulos/multiplicar');
const yargs = require("yargs")
    .option('b',{
        alias:'base',
        type:'number',
        defalut: 1
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        defalut: true
    }).argv;
let verde= "\u001b[32m";
let reset= "\u001b[0m";
let rojo= "\u001b[31m";
const base=yargs.base;
const listar = yargs.listar;


crearArchivo(base, listar)
    .then(nombreArchivo => console.log('\n',verde,"Archivo",nombreArchivo, "creado",reset))
    .catch(err => console.log(rojo,err,reset));