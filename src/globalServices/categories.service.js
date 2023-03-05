import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const getCategoryById=async(history,showToast,removeUser,id)=>{
  const response=await makeRequest(`categories/${id}`,'GET',{},true)
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  {
    // console.log(response);
    return response.results    
  }
  else{
      const response=await makeRequest('categories','GET',{},true)
      return response.results.results
    }
}

export const getCategories=async(history,showToast,removeUser,perPage = 5)=>{
  const response=await makeRequest(`categories?page=1&per_page=${perPage}`,'GET',{},true)
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  return response.results.results    
  else{
      const response=await makeRequest('categories','GET',{},true)
      return response.results.results
    }
}