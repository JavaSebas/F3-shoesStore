import React from 'react'
import Datos from './data.json'
import {Item} from './Item'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

function Listado({status}) {
  return (
    <div className='container'>
      {/* renderizamos los Item aquí */}
      {Datos.map((data, i) => {
          return (
      
            <Item id={i} key={data.id} data={data} status={status}/>
          )
        })}
    </div>
  )
}

export {Listado}
