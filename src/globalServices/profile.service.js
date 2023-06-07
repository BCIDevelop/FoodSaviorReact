import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"


export const deleteUserService=async(history,showToast,removeUser)=>{
    const controller=new AbortController()
    const signal=controller.signal
    const response=await makeRequest(signal,'profile/me','DELETE',{},true)
    const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.result  
    else{
        const response=await makeRequest(signal,'profile/me','DELETE',{},true)
        return response.results.result
      }
  }