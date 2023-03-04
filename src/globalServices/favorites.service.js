import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const getFavoritesService=async(history,showToast,removeUser)=>{
    const response=await makeRequest('favorites','GET',{},true)
    const isResponseValid=await responseHandler(response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.results    
    else{
        const response=await makeRequest('favorites','GET',{},true)
        return response.results.results
      }
}

export const deleteFavoritesService=async (products,history,showToast,removeUser)=>{
    const response=await makeRequest('favorites/bulk','DELETE',{products:products},true)
    const isResponseValid=await responseHandler(response,history,showToast,removeUser)
    if (isResponseValid)  return response.results?.results    
    else{
        const response=await makeRequest('favorites/bulk','DELETE',{products:products},true)
        return response.results?.results
      }
}