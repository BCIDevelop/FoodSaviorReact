import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const setCategoriesUpdate=async(signal,history,showToast,removeUser,id, formContent)=>{
  const response=await makeRequest(signal,`categories/${id}`,'PUT',formContent,true)
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  {
 
    return response.results    
  }
  else{
      const response=await makeRequest('categories','GET',{},true)
      return response.results.results
    }
}

export const setCategoriesCreate=async(signal,history,showToast,removeUser, formContent)=>{
  const response=await makeRequest(signal,`categories`,'POST',formContent,true)
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  {
    return response.results    
  }
  else{
      const response=await makeRequest(signal,'categories','GET',{},true)
      return response.results.results
    }
}

export const getCategoryById=async(signal,history,showToast,removeUser,id)=>{
  const response=await makeRequest(signal,`categories/${id}`,'GET',{},true)
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  {
 
    return response.results    
  }
  else{
      const response=await makeRequest(signal,'categories','GET',{},true)
      return response.results.results
    }
}

export const getCategories=async(signal,history,showToast,removeUser,perPage = 5)=>{
  const response=await makeRequest(signal,`categories?page=1&per_page=${perPage}`,'GET',{},true)
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  return response.results
  else{
      const response=await makeRequest(signal,'categories','GET',{},true)
      return response.results.results
    }
}

export const setCategories=async(signal,history,showToast,removeUser,formData)=>{
  const response=await makeRequest(signal,`categories`,'POST',formData,true,"form-data")
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  {
    return response.results
  }
  else{
      const response=await makeRequest(signal,'products','GET',{},true)
      return response.results.results
    }
}