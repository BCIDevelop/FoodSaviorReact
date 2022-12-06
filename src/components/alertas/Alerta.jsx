import React from 'react'
import './alerta.css'
const Alerta = () => {
  return (
    <ul className="contenedor-alerta">
        <li className="alerta-detalle">
          <img className="img-product" src="./static/img/product.jpg" alt="" />
          <p className="alerta-mensaje">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam magni, temporibus.
          </p>
        </li>
        <div className="alerta-acciones">
          <button className="accion-boton">CONSUMIDO</button>
          <button className="accion-boton">ELIMINAR</button>
        </div>
      </ul>
  )
}

export default Alerta
