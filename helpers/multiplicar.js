const fs = require("fs");
const color = require("colors");

const crearArchivo = async (base = 5, list, hasta) =>{

    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; ) {
        salida += `${base}x${i}=${base*i} \n`;
        consola += color.rainbow('*****') + color.white(`${base}x${i}=${base*i}`) + color.rainbow('*****\n');
        i++;
    }

    if(list) {
        console.log();
        console.log(color.rainbow("****************************"));
        console.log(color.rainbow("****************************"));
        console.log(`       Tabla del ${base}       `.yellow);
        console.log(color.rainbow("****************************"));
        console.log(color.rainbow("****************************"));
        console.log()
        console.log(consola);
    }
    

    // fs.writeFile(`tabla-${base}.txt`, salida,(err)=>{
    //     if(err) throw err;

    //     console.log(`tabla-${base}.txt`);
    // });

    return new Promise((resolve, reject) => {

        try {
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(color.blue(`tabla-${base}.txt`));
        } catch (error) {
            reject(color.red(`tabla-${base}.txt no creada`))
        }
    })

    //si da error con un try catch

};

module.exports = {
    crearArchivo
}