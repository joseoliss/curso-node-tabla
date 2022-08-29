
const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();
//const base = 5;

//console.log(process.argv);
console.log(argv);

//obtener los argumentos desde la consola
const [,,arg3] = process.argv;
//const [base] = arg3.split("=");

const {base, list, hasta} = argv;

crearArchivo(base, list, hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.error(err));