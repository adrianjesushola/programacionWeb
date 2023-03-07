const fs = require("fs");
let azul= "\u001B[34m";
let reset= "\u001b[0m";
let verde= "\u001b[32m";
let magenta= "\u001b[35m";
let amarillo= "\u001b[33m";
let rojo= "\u001b[31m";
const crearArchivo = async (base=1,listar = false) => {
    let texto = "";
    texto+=`Tabla del ${base}\n`
    if (listar)
        console.log(amarillo+`Tabla del ${base}\n`+reset)
    for (let i = 0; i <= 10; i++) {
        texto+=`${base} * ${i} = ${base*i}\n`;
        if (listar)
            console.log(`${azul}${base} ${reset}* ${rojo}${i} ${reset}= ${magenta}${base*i}${reset}`)
    }

    try {
        fs.writeFile(`Tabla del ${base}.txt`, texto, (err)=>{(!err)?console.log(``):console.log(err)});
    } catch (e) {
        return e;
    }
    return `Tabla del ${base}.txt`;


}

module.exports = {
    crearArchivo:crearArchivo
}