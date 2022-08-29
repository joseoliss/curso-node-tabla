const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                }).option('l',{
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Lista la tabla en consola'
                }).option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Indica hasta qué numero vamos a crear la tabla'
                })
                .check( (argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    if (argv.h > 100 || argv.h < 1) throw 'Hasta tiene que ser un número entre 1 y 99'
                    return true;
                }).argv;

module.exports = argv;