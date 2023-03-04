import styles from './loader.css'
import { useContext } from 'react'
import { LoaderContext } from '../../context/LoaderContext'
const Loader = ({location}) => {
    const {loader}=useContext(LoaderContext)
    const height= (location =='/register' || location =="/login") ? "100vh" : "100%"
    if (loader){
        return (
            <div style={{height:height}} className='loader-container'>
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
          )
    }
    return null
}
export default Loader
