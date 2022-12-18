import React,{Fragment, useState} from 'react'
import './foodSavior.css'
import AppCard from '../../components/cards/appCard/AppCard'
import './foodSavior-firstSection.css'
import slider1 from '../../img/slide1.jpg'
import slider2 from '../../img/slide2.jpg'
import slider3 from '../../img/slide3.jpg'
import slider4 from '../../img/slide4.jpg'
import funcionalid from '../../img/funcionalidad.png'
import difDispositivos from '../../img/diferentes-dispositivos.png'


const FoodSavior = () => {
  const monthly=[
    {
      plan:'PRO',planText:'Funcionalidades esencial para profesionalizar su negocio',price:'US$5.99',period:'mes',footerTitle:'Control de inventario'
    },
    {
      plan:'GROW',planText:'Soluciones para empresas en crecimiento que buscan agilidad',price:'US$8.99',period:'mes',footerTitle:'Version para computadora'
    },
    {
      plan:'PRIME',planText:'Para los que buscan personalizacion y un servicio de primera',price:'US$19.99',period:'mes',footerTitle:'Sitio web personalizado'
    } 
  ]
  const anually=[
    {
      plan:'PRO',planText:'Funcionalidades esencial para profesionalizar su negocio',price:'US$55.99',period:'año',footerTitle:'Control de inventario',discount:'-16%'
    },
    {
      plan:'GROW',planText:'Soluciones para empresas en crecimiento que buscan agilidad',price:'US$88.99',period:'año',footerTitle:'Version para computadora',discount:'-45%'
    },
    {
      plan:'PRIME',planText:'Para los que buscan personalizacion y un servicio de primera',price:'US$189.99',period:'año',footerTitle:'Sitio web personalizado',discount:'-48%'
    } 
  ]
  const [cardPricing,setCardPricing]=useState(monthly)
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
      const cards=document.querySelectorAll('.pricingCard')
      circle.classList.toggle('toggled')
      let period
      if (circle.classList.contains('toggled')) {
          period=anually
          cards.forEach((element)=>{
            element.classList.add('togglePrice')
            element.classList.remove('togglePriceRight')
            
          })
      }
      else {
        period=monthly
        cards.forEach((element)=>{
          element.classList.add('togglePriceRight')
          element.classList.remove('togglePrice')
          
        })
      }
      
      setTimeout(()=>{
        setCardPricing(period)
      },500)
  }
  return (
  <div>

    {/* /**********************************************************/
    /***************** landing parte SUPERIOR *****************/
    /**********************************************************/ }

    <section className="container-landing">

        
            <div className="title-container">

                <h1 className="title">Sistema para Control de Inventario y Gestión de Stock</h1>
            </div>
          {/* 
            <!----------------------inicio banner---------------------------->       
                <!--------------------------------------------------------------->   */}

                <div className="container-slider">
                    <div className="slider">
                        <div className="slides">
    
                            {/* <!-- radio-btns --> */}
                            <input type="radio" name="radio-btn" id="radio1"/>
                            <input type="radio" name="radio-btn" id="radio2"/>
                            <input type="radio" name="radio-btn" id="radio3"/>
                            <input type="radio" name="radio-btn" id="radio4"/>
    
                            {/* <!-- imagenes --> */}
                            <div className="slide first">
                                <img src={slider1} alt="slider_1"/>
                            </div>
                            <div className="slide">
                                <img src={slider2} alt="slider_2"/>
                            </div>
                            <div className="slide">
                                <img src={slider3} alt="slider_3"/>
                            </div>
                            <div className="slide">
                                <img src={slider4} alt="slider_4"/>
                            </div>

                        </div>

                        
    
                    </div>  
                    
                    <div className="navigation">
                                
                        {/* <!-- navegacion inicial automatica --> */}
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>

                        {/* <!-- navegacion inicial manual --> */}
                        <div className="navigation-manual">
                            <label htmlFor="radio1" className="manual-btn"></label>
                            <label htmlFor="radio2" className="manual-btn"></label>
                            <label htmlFor="radio3" className="manual-btn"></label>
                            <label htmlFor="radio4" className="manual-btn"></label>
                        </div>
                    </div>
                    
                </div>
                
                {/* <!--------------------------------------------------------------->     
                <!-------------------------fin banner---------------------------->*/}


            <div className="sup-description"> 

                <div className="text-inicial">
                    <p>El sistema de control de inventario que simplificará su trabajo. Ahora tener el control de sus productos es más fácil que nunca con Kyte. ¡La app para control de stock y ventas que estaba buscando!</p>
                    <button className="button-landing">Instalar FoodSavior</button>
                    <h2>Para tiendas y vendedores autónomos.</h2>
                </div>


                {/* <!--------------------------------------------------------------->     
                <!--opiniones-->       
                <!--------------------------------------------------------------->*/}
                <div className="opiniones">
                    <div> 
                        <p className="estrellas">★★★★★</p>
                        <p className="social-review">"La app esta muy completa"</p>
                    </div>
                    <div> 
                        <p className="estrellas">★★★★★</p>
                        <p className="social-review">"Excelente app"</p>
                    </div>
                    <div> 
                        <p className="estrellas">★★★★★</p>
                        <p className="social-review">"App muy intuitiva y facil"</p>
                    </div>
                    <div> 
                        <p className="estrellas">★★★★★</p>
                        <p className="social-review">"Es genial!"</p>
                    </div>
                  </div>
            </div>
            
            <div className="text-middle">
                <p className="linea">_______________________________</p>
                <h2>FoodSavior es mutiplataforma, puede usarlo en su móvil, tablet o computadora</h2>
                <img className="img-multiplataforma" src={difDispositivos} alt="dispositivosDiferentes"/>
                <button className="button-landing">Instalar FoodSavior</button>
            </div>
            <div className="description-app-container">
                <h2>Como se hace un control de inventarios</h2>
                <div className="description-app">
                <div className="item">
                    <i className="fa fa-cutlery" aria-hidden="true"></i>
                    <span className="item-desc"><a href="#">Control de stock</a></span>
                </div>
                <div className="item">
                    <i className="far fa-bell"></i>
                    <span className="item-desc"><a href="#">Alertas de productos a vencer</a></span>
                </div>
                <div className="item">
                    <i className="fas fa-mouse-pointer"></i>
                    <span className="item-desc"><a href="#">Fácil de usar</a></span>
                </div>
                <div className="item">
                    <i className="fas fa-chart-bar"></i>
                    <span className="item-desc"><a href="#">Reportes en tiempo real</a></span>
                </div>
                <div className="item">
                    <i className="fas fa-unlock-alt"></i>
                    <span className="item-desc"><a href="#">100% Seguro</a></span>
                </div>
                <div className="item">
                    <i className="fas fa-clipboard-list"></i>
                    <span className="item-desc"><a href="#">Control de consumo</a></span>
                </div>
                </div>
            </div>
            {/* <!-- -------------------------------------------------------------------- -->
            <!-- funcionalidades-descripcion -->
            <!-- -------------------------------------------------------------------- --> */}
            <p className="linea">_______________________________</p>
            <div className="desc-funcionalidad">
                <div className="img-funcion">
                    <img src={funcionalid} alt=""/>
                </div>
                <div className="descripcion-funcionalidad">
                    <h2>Control de stock</h2>
                    <span>Con nuestro sistema para control de inventario, la gestión de su negocio se quedará mucho más fácil.</span>
                    <span>Controle las cantidades que tiene en stock desde su celular, tablet o computadora. Sepa cuántos artículos tiene disponible para vender, inclusive productos a granel.</span>
                    <span>Su inventario actualizado en tiempo real con las ventas de cada vendedor, de esta forma nunca le tomarán de sorpresa sin productos disponibles. Administre sus pedidos con diferentes estados que afecten o no el stock de sus productos.</span>
                </div>
            </div>
 
            
    </section>
    
    {/* /**********************************************************/
    /***************** landing parte INFERIOR *****************/
    /**********************************************************/ }
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
                        <AppCard key={`appCard${index}`}  element={element}></AppCard>
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
              <p>Food Savior regala un periodo de prueba de 2 meses, el cual puedes cancelar en cualquier momento, sin ningun
                cargo en tu tarjeta. Para más informacion comunicate por nuestro canal de ayuda.
              </p>
            </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default FoodSavior
