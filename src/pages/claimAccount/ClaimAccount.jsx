import { useEffect,useContext } from 'react'
import './claim-account.css'
import image from '../../assets/imagenVerif.png'
import { Link } from 'react-router-dom'
import imageConfirmation from '../../assets/confirmation.png'
import { useLocation } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

const ClaimAccount = () => {
    
    const search=useLocation().search
    const email = new URLSearchParams(search).get('email');
    const token = new URLSearchParams(search).get('token');
    const [{data},makeFetch,setFetch]=useFetch({url:`auth/claim-account?email=${email}&token=${token}`,method:'POST',body:{},hasCredentials:false,makeRender:true}) 
    
 
  return (
    
    <div className='claim-account'>
            <img className="bg-img" src={image} alt="background-claim"/>
        <div className="parrafoIdent">
             <h1 className='claim-title'>Verificación de Identidad</h1>
             <img className="email-image" src={imageConfirmation} alt="email-image"/>
            <p className="bg-text">
                Muchas gracias por registrarte!! <br/> <br/>
                Tu cuenta ha sido verificada correctamente
                
            </p>
            <h3> Ya puedes <Link to={'/login'}>iniciar sesion</Link></h3>
        </div>
   
  </div>






  )
}

export default ClaimAccount
