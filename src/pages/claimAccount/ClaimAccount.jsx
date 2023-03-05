import { useEffect,useContext } from 'react'
import './claim-account.css'
import image from '../../assets/imagenVerif.png'
import { Link } from 'react-router-dom'
import imageConfirmation from '../../assets/confirmation.png'
import { useNavigate,useLocation } from 'react-router-dom'
import { AlertContext } from '../../context/AlertContext'
import { claimAccountService } from '../../globalServices/auth.service'


const ClaimAccount = () => {
    const {showToast}=useContext(AlertContext)
    const history=useNavigate()
    const search=useLocation().search
    const email = new URLSearchParams(search).get('email');
    const token = new URLSearchParams(search).get('token');
    
    async function claimAccountRequest(){
        await claimAccountService(history,showToast,email,token)
    }

    useEffect(()=>{
        claimAccountRequest()
    },[])
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
