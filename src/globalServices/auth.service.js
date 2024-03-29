 import makeRequest from "./api.service"
 import responseHandler from "../utils/handlerResponse"
 export const claimAccountService=async (history,showToast,email,token)=>{
    const response=await makeRequest(`auth/claim-account?email=${email}&token=${token}`,'POST',{},false)
    responseHandler(response,history,showToast)
 }
 export const fbLoginService=async (signal,history,showToast,removeUser,accessToken)=>{
   const response=await makeRequest(signal,`auth/fb-login`,'POST',{access_token:accessToken},false)
   const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
   if (isResponseValid)  {
     return response.results    
   }
   else{
       const response=await makeRequest(signal,`auth/fb-login`,'POST',{accessToken},false)
       return response.results
     }
}
export const gmailLoginService=async (signal,history,showToast,removeUser,credential)=>{
   const response=await makeRequest(signal,`auth/gmail-login`,'POST',{credential},false)
   const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
   if (isResponseValid)  {
     return response.results    
   }
   else{
       const response=await makeRequest(signal,`auth/gmail-login`,'POST',{credential},false)
       return response.results
     }
}