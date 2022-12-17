import React,{useState} from 'react'
import './foodSavior.css'
import AppCard from '../../components/cards/appCard/AppCard'
const FoodSavior = () => {
  const [cardPricing,setCardPricing]=useState([{},{},{}])
  function collapseAnswer(index){
    const collapse=document.querySelectorAll('.cardCollapse')
   const dropDown=document.querySelectorAll('.dropDownCard')

    collapse[index].classList.toggle(`collapse`)
    if(collapse[index].classList.contains('collapse'))  {
      dropDown[index].classList.replace('fa-caret-up','fa-caret-down')
      collapse[index].style.display='none'

    }
    else {
      dropDown[index].classList.replace('fa-caret-down','fa-caret-up')
      collapse[index].style.display='block'
    }
  }
  function togglePrices(){
      const circle=document.querySelector('.circle')
      circle.classList.toggle('toggled')
  }
  return (
    <div className='containerApp'>
       <section className='pricing'>
          <div className='pricingBackground'>
                  <h2 className='pricingTitle'>Todo negocio comienza con un plan</h2>
          </div>
          <div className='pricePlansContainer'>
                  <div className='toggleContainer'>
                        <h4 className='pricingSubtitle'>MENSUAL</h4>
                        <div onClick={togglePrices} className='toggle'>
                            <div className='circle'></div>
                        </div>
                        <h4 className='pricingSubtitle'>ANUAL</h4>
                  </div>
                 
                  <div className='cardPricingContainer'>
                  {cardPricing.map((element,index)=>(
                        <AppCard key={`appCard${index}`}></AppCard>
                        ) )}
                  </div>
          </div>
       </section>
       <section className='plans'>
           <h2>Compara los beneficios de cada plan:</h2>   
           <div className='tableContainer'>
           <table className='plansContainer' cellSpacing = "0">
          <tbody>

         

            <tr className='headerRow'>
              <th className='headerTable'>Mantenga</th>
              <th >FREE</th>
              <th>PRO</th>
              <th>GROW</th>
              <th>PRIME</th>
            </tr>
            
            <tr>
              
              <td className='rowElement'><i className="fa-sharp fa-solid fa-store isDisplay"></i> Productos Ilimitados</td>
               <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
               <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
               <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
               <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            </tr>
            <tr>
            <td className='rowElement'><i className="fa-solid fa-list isDisplay"></i> Catalogo en linea</td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>

            </tr>
            <tr>
            <td className='rowElement'> <i className="fa-solid fa-camera isDisplay"></i> Fotos por productos</td>
            <td>1</td>
            <td>5</td>
            <td>7</td>
            <td>7</td>
            </tr> 
        
            <tr className='headerRow'>
              <th className='headerTable'>Gestione</th>
              <th >FREE</th>
              <th>PRO</th>
              <th>GROW</th>
              <th>PRIME</th>
            </tr>
            <tr>
            <td className='rowElement'><i className="fa-solid fa-list isDisplay"></i> Gestion de inventario</td>
            <td></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>

            </tr>
            <tr>
            <td className='rowElement'><i className="fa-sharp fa-solid fa-chart-simple isDisplay"></i> Estadisticas <span className='new'>NUEVO</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>

            </tr>
             
            <tr className='headerRow'>
              <th className='headerTable'>Asistencia</th>
              <th >FREE</th>
              <th>PRO</th>
              <th>GROW</th>
              <th>PRIME</th>
            </tr>
           
            <tr>
            <td className='rowElement'> <i className="fa-solid fa-circle-question isDisplay"></i> Central de ayuda</td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            
            </tr>
            <tr>
            <td className='rowElement'> <i className="fa-brands fa-rocketchat isDisplay"></i> Por Chat</td>
             <td></td>
             <td></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>

            </tr>
            <tr>
            
            <td className='rowElement'> <i className="fa-brands fa-whatsapp isDisplay"></i> Por WhatsApp</td>
            <td></td>
             <td></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>
            <td><i className="fa-sharp fa-solid fa-circle-check colorCheck"></i></td>

            </tr>
            </tbody>
            </table>     
            </div> 
       </section>
      <section className='questionAnswer'>
        <h2>Preguntas Frecuentes</h2>
        <div className='questionCard'>
        <div className='questionCardContent'>
            <h3>Que es Food Savior?</h3> 
            <div onClick={()=>collapseAnswer(0)}>
            <i className="fa-solid fa-caret-down dropDownCard"></i>
            </div>
            </div>
            <div className='cardCollapse collapse'>
              <p>Food Savior es un sistema de ventas y gestion en el celular
                tablet,computadora.Food Savior tiene herramientas especiales para que ofrezca
                la mejor experiencia de compra a sus clientes.Combina eficiencia y modernidad
                con una interfaz intuitiva y facil de usar.
              </p>
            </div>
        </div>
        <div className='questionCard'>
        <div className='questionCardContent'>
            <h3>Hay periodo de prueba?</h3> 
            <div onClick={()=>collapseAnswer(1)}>
            <i className="fa-solid fa-caret-down dropDownCard"></i>
            </div>
            </div>
            <div className='cardCollapse collapse'>
              <p>Food Savior es un sistema de ventas y gestion en el celular
                tablet,computadora.Food Savior tiene herramientas especiales para que ofrezca
                la mejor experiencia de compra a sus clientes.Combina eficiencia y modernidad
                con una interfaz intuitiva y facil de usar.
              </p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default FoodSavior
