import React from 'react'
import './home.css'
import Alerta from '../../components/alertas/Alerta'
import CategoryCards from '../../components/cards/categoryCard/CategoryCards'
const Home = () => {
  return (
    <section className="container__productos">
   
    
    <div className="contenedor-sup-alertas">
      <div className="cabecera-alertas">
        <div className="alerta-derecha">
          <p className="icon_inside_alert text-alertas">Alertas</p>
          <i className="icon_inside_alert icon-campana fa-solid fa-bell"></i>
        </div>
        <div className="ver-todo icon_inside_alert">VER TODO</div>
      </div>
      
        <Alerta></Alerta>
    </div>

    <div className="contenedor-infe-products">
    
      <CategoryCards></CategoryCards>

      

    
     
     
    
    </div>

  </section>
  )
}

export default Home
