// imports file system
const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];

const guardarDB = () => {
    
    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('Se guardo satisfactoriamente');
      });

};

const cargarDB = () => {

    try{
        listadoPorHacer = require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }

    

};


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();


    return porHacer;

};

const getListado = () => {

    cargarDB();

    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true ) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if (index >=0 ){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return console.log('Se actualizo la terea'.green);
    } else {
        return console.log('La tarea no existe'.red);
    }

};

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );

    if ( listadoPorHacer.length === nuevoListado.length ){
        return console.log('No se elimino ningun item'.red);
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return console.log('Se ha eliminado la tarea del listado'.green);
    }
};


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};