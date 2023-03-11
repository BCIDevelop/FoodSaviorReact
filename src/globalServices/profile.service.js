import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const getUserProfileService= async(history,showToast,removeUser)=>{
    const response=await makeRequest('profile/me','GET',{},true)
    

    //(response,history=null,showToast=null,removeUser=null)
    const valida= await responseHandler(response,history,showToast,removeUser)
  
    if(valida) {
        return response.results.result
    }
    else {
        const response=await makeRequest('profile/me','GET',{},true)
        return response.results.result
    }

        
}

export const updateProfileService= async(history,showToast,removeUser,data)=>{
    const response=await makeRequest('profile/me','PATCH',data,true,"form-data")
    
    //(response,history=null,showToast=null,removeUser=null)
    const valida= await responseHandler(response,history,showToast,removeUser)
   
    if(valida) {
        return response.results.result
    }
    else {
        const response=await makeRequest('profile/me','PATCH',{},true)
        return response.results.result
    }

        
}
export const deleteUserService=async(history,showToast,removeUser)=>{
  
    const response=await makeRequest('profile/me','DELETE',{},true)
    const isResponseValid=await responseHandler(response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.result  
    else{
        const response=await makeRequest('profile/me','DELETE',{},true)
        return response.results.result
      }
  }