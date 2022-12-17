import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'
import { useNavigate,Link} from 'react-router-dom'
const Footer = () => {
  const history=useNavigate()
  function disapearBanner(){
    document.querySelector('.cookieBanner').style.display='none'
  }
  return (
    <footer>
       <div className='footerContainer'>
            <div className='footerFirst'>
              <img src={logo} alt="logo marca" />
              <button onClick={()=>history('/login')}>Probar FoodSavior</button>
            </div>
            <div>
              <h2>Mantenga</h2>
              <ul>
                <li><Link to={'/login'}>Ver productos</Link></li>
                <li><Link to={'/login'}>Dashboard</Link></li>
                <li><Link to={'/login'}>Catalogos en Linea</Link></li>
              </ul>
            </div>

            <div>
              <h2>Gestione</h2>
              <ul>
                <li><Link to={'/login'}>Ver productos</Link></li>
                <li><Link to={'/login'}>Dashboard</Link></li>
                <li><Link to={'/login'}>Catalogos en Linea</Link></li>
              </ul>
            </div>
            <div>
              <h2>Ayuda</h2>
              <ul>
                <li><Link to={'/login'}>Central de ayuda</Link></li>

              </ul>
              <div className='terms'>
              <p>SIGUENOS: <span><i className="fa-lg fa-brands fa-facebook-f iconSocial"></i></span> <span><i className="fa-brands fa-instagram iconSocial fa-lg"></i></span></p>

              <h5></h5>
              </div>

            </div>
       </div>
      <div className='cookieBanner'>
        <div>
           <p>Usamos cookies para ofrecerle la mejor experiencia de nuestros servicios. Mas info</p>
            <button onClick={disapearBanner}>Acepto</button>
        </div>
        </div> 
    </footer>
  )
}

export default Footer
