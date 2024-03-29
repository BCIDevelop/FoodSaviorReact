
import { useContext, useEffect ,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import makeRequest from '../globalServices/api.service'
import responseHandler from '../utils/handlerResponse'
import { AlertContext } from '../context/AlertContext'
import { UserContext } from '../context/UserContext'
const useFetch = (initialConfig) => {
  const history=useNavigate()  
  const [data,setData]=useState([])
  const controllerRef=useRef(null)
  const [config,setConfig]=useState(initialConfig)
  const {showToast}  = useContext(AlertContext)
  const {removeUser}  = useContext(UserContext)
  async function requestApi() {
   try{
   const {url,method,body,hasCredentials,makeRender}=config
   controllerRef.current=new AbortController()
   const signal=controllerRef.current.signal
   const response=body instanceof FormData ? await makeRequest(signal,url,method,body,hasCredentials,"form-data") : await makeRequest(signal,url,method,body,hasCredentials)
   const valid=await responseHandler(signal,response,history,showToast,removeUser,)
   if (valid) {
      const result=response.results?.results ? response.results.results : response.results.result
      if(makeRender) setData(result)
   }  
   else{
      const response=body instanceof FormData ? await makeRequest(signal,url,method,body,hasCredentials,"form-data") : await makeRequest(signal,url,method,body,hasCredentials)
      const result=response.results?.results ? response.results.results : response.results.result
      if(makeRender) setData(result)
   } 
   }
   catch(error){
   console.log(error)
   }
    
 } 
 useEffect(()=>{
    requestApi()
    return ()=>{
       controllerRef.current.abort()
    }
 },[config])
  return [{data},setConfig,setData]
}
export default useFetch
