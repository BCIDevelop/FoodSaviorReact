import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"


export const deleteUserService=async(signal,history,showToast,removeUser)=>{
    
    const response=await makeRequest(signal,'profile/me','DELETE',{},true)
    const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.result  
    else{
        const response=await makeRequest(signal,'profile/me','DELETE',{},true)
        return response.results.result
      }
  }
  export const updateProfileService= async(signal,history,showToast,removeUser,data)=>{
    const response=await makeRequest(signal,'profile/me','PATCH',data,true,"form-data")

    const valida= await responseHandler(signal,response,history,showToast,removeUser)

    if(valida) {
        return response.results.result
    }
    else {
        const response=await makeRequest(signal,'profile/me','PATCH',{},true)
        return response.results.result
    }


}