const opts1 = {
    descripcion:{
        demand: true,
        alias: 'd',
    }
};

const opts2 = {
    descripcion:{
        demand: true,
        alias: 'd',
    },
    completado:{
        default: true,
        alias: 'c',
        type: 'boolean'
    }
};



const argv = require('yargs')
                    .command('crear', 'Crea una nueva tarea por hacer', opts1)
                    .command('listar', 'Lista todas las tareas por hacer')
                    .command('actualizar', 'Actualiza una tarea por hacer', opts2)
                    .command('borrar', 'Borra una tarea', opts1)
                    .help()
                    .argv;


module.exports = {
    argv
};
