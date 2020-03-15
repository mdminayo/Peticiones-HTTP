// import { init } from "./js/chistes-page";
// init();


//  import { obtenerUsuarios } from "./js/http-provider";
//  obtenerUsuarios().then( console.log );


// import { init } from './js/usuarios-page'
// init();

import * as CRUD from './js/crud-provider';

// // CRUD.getUsuario( 3 ).then( console.log );

// CRUD.crearUsuario( {

//     name: 'Danilo',
//     job: 'Programador'

// }).then( console.log );

// CRUD.actualizarUsuario( 1, {
//     name: 'Melissa',
//     job: 'DevOps'
// }).then(console.log);

CRUD.borrarUsuario( 2 ).then( console.log );

import { init } from './js/archivos-page';

// crearInputFileHtml();

init();

