import React, { useState } from "react";

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

function Item({data, status}) {

  const info = data;
  const [stocks, setStock] = useState(info.stock);

  const onClick = () => {
    setStock(stocks - 1);
    status(1);
  };
  return (
    <div className='producto'>
      <>
      <h3>{data.producto.nombre}</h3>
      <p>{data.producto.descripcion}</p>
      <h5>Cantidad{stocks>0 ? <span>{stocks}</span> : <span>agotado</span> }</h5>
      {stocks > 0 ? <button onClick={onClick}>Comprar</button> : <button disabled={true} style={{cursor: 'default'}}>Sin Stock</button>}
      {/* <button disabled={false} onClick={onClick}>Comprar</button> */}

      

      </>
    </div>
  )
}

export {Item}
