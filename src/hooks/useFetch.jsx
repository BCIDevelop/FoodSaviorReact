
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import makeRequest from '../globalServices/api.service'
import responseHandler from '../utils/handlerResponse'
import { AlertContext } from '../context/AlertContext'
import { UserContext } from '../context/UserContext'
const useFetch = (config) => {
  const history=useNavigate()  
  const {showToast}  = useContext(AlertContext)
  const {removeUser}  = useContext(UserContext)
  async function requestApi() {
    const {url,method,body,hasCredentials}=config
    const response=await makeRequest(url,method,body,hasCredentials)
    const valid=await responseHandler(response,history,showToast,removeUser)
    if (valid)  return response.results.results    
    else{
        const response=await makeRequest(url,method,{},hasCredentials)
        return response.results.results
      }
 } 
 
  return requestApi
}
export default useFetch
