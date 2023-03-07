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
