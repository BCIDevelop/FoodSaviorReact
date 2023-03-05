 import makeRequest from "./api.service"
 import responseHandler from "../utils/handlerResponse"
 export const claimAccountService=async (history,showToast,email,token)=>{
    const response=await makeRequest(`auth/claim-account?email=${email}&token=${token}`,'POST',{},false)
    responseHandler(response,history,showToast)
 }