import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const getUserProfileService= async(history,showToast,removeUser)=>{
    const response=await makeRequest('profile/me','GET',{},true)
    console.log(response)

    //(response,history=null,showToast=null,removeUser=null)
    const valida= await responseHandler(response,history,showToast,removeUser)
    console.log(valida)
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
    console.log(valida)
    if(valida) {
        return response.results.result
    }
    else {
        const response=await makeRequest('profile/me','PATCH',{},true)
        return response.results.result
    }

        
}