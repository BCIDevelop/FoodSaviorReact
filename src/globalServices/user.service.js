import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const getUserService=async(history,showToast,removeUser)=>{
    const response=await makeRequest('profile/me','GET',{},true)
   
    const isResponseValid=await responseHandler(response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.result  
    else{
        const response=await makeRequest('profile/me','GET',{},true)
        return response.results.result
      }
}

