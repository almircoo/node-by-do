//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv; //llamando a comandos config-yargs
const porHacer = require('./por-hacer/por-hacer'); //llamando a la funcion por hacer

const colors= require('colors'); //llama los colores

//estableciendo los comandos
let comando = argv._[0];
switch (comando) {
  //caso1
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
  break;
  //caso2
  case 'listar':
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log('========Por Hacer========'.green);
      console.log(tarea.descripcion);
      console.log('========================='.green);
    }
  break;
  //caso3
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
  break;
  //case delete
  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
  break;
  //finalizar
  default:
    console.log('Comando no reconocido');
}
