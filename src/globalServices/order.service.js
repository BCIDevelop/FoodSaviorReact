import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const getCategoryById=async(history,showToast,removeUser)=>{
  const response=await makeRequest(`order`,'POST',{},true)
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  {
    // console.log(response);
    return response.results    
  }
  else{
      const response=await makeRequest('order','POST',{},true)
      return response.results.results
    }
}
