import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const getPlansService=async(history,showToast,removeUser)=>{
    const response=await makeRequest('plans','GET',{},true)
    
    const isResponseValid=await responseHandler(response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.results    
    else{
        const response=await makeRequest('plans','GET',{},true)
        return response.results.results
      }
}
