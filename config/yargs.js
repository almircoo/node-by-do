const descripcion={
  demand:true,
  alias:'d',
  desc:'Descripcion de la tarea por hacer'
}
const completado={
  default: true,
  alias: 'c',
  desc:'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
          .command('crear', 'Crear un elemento por hacer',{
            descripcion
          })
          .command('actualizar', 'Actualizar el estado completo de la tareas',{
            descripcion,
            completado
          })
          .command('borrar', 'Borrar una tarea',{
            descripcion
          })
          .help()
          .argv;

module.exports={
  argv
}
