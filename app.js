// imports
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch( comando ){

    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
    break;

    case 'listar':
        
        let listado = porHacer.getListado();

        for( let lista of listado ){
            console.log('==========Por Hacer==========='.green);
            console.log(lista.descripcion);
            console.log('Completado? = ', lista.completado);
            console.log('=============================='.green);
        }

    break;

    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
    break;

    case 'borrar':
        porHacer.borrar(argv.descripcion);
    break;

    default:
        console.log('comando no reconocido');

}
