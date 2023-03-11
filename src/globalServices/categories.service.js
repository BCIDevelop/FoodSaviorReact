import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const setCategoriesUpdate=async(history,showToast,removeUser,id, formContent)=>{
  const response=await makeRequest(`categories/${id}`,'PUT',formContent,true)
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  {
 
    return response.results    
  }
  else{
      const response=await makeRequest('categories','GET',{},true)
      return response.results.results
    }
}

export const setCategoriesCreate=async(history,showToast,removeUser, formContent)=>{
  const response=await makeRequest(`categories`,'POST',formContent,true)
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  {
    return response.results    
  }
  else{
      const response=await makeRequest('categories','GET',{},true)
      return response.results.results
    }
}

export const getCategoryById=async(history,showToast,removeUser,id)=>{
  const response=await makeRequest(`categories/${id}`,'GET',{},true)
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  {
 
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
  if (isResponseValid)  return response.results
  else{
      const response=await makeRequest('categories','GET',{},true)
      return response.results.results
    }
}

export const setCategories=async(history,showToast,removeUser,formData)=>{
  const response=await makeRequest(`categories`,'POST',formData,true,"form-data")
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  {
    return response.results
  }
  else{
      const response=await makeRequest('products','GET',{},true)
      return response.results.results
    }
}