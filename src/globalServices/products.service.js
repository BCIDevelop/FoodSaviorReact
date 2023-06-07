import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const setProductUpdateById=async(signal,history,showToast,removeUser,id, formData)=>{
  const response=await makeRequest(signal,`products/${id}`,'PATCH',formData,true,"form-data")
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  {
    return response.results    
  }
  else{
      const response=await makeRequest(signal,'products','GET',{},true)
      return response.results.results
    }
}

export const setProductByIdAndUser=async(signal,history,showToast,removeUser,formData)=>{
  const response=await makeRequest(signal,`products/user`,'POST',formData,true,"form-data")
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  {
    return response.results    
  }
  else{
      const response=await makeRequest(signal,'products','GET',{},true)
      return response.results.results
    }
}

export const getProductById=async(signal,history,showToast,removeUser,id)=>{
  const response=await makeRequest(signal,`products/${id}`,'GET',{},true)
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  {
   
    return response.results    
  }
  else{
      const response=await makeRequest(signal,'products','GET',{},true)
      return response.results.results
    }
}

export const getAllProductByUser=async(signal,history,showToast,removeUser, paramGET)=>{
  const response=await makeRequest(signal,'products/user?page='+paramGET.page,'GET',{},true)
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  {
    return response.results;    
  }
  else{
      const response=await makeRequest(signal,'products','GET',{},true)
      return response.results.results
    }
}

export const getAllProductsService=async(signal,history,showToast,removeUser,perPage = 5)=>{
  const response=await makeRequest(signal,`products?page=1&per_page=${perPage}`,'GET',{},true)
  const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
  if (isResponseValid)  return response.results.results    
  else{
      const response=await makeRequest(signal,'products','GET',{},true)
      return response.results.results
    }
}

export const getProductsService=async(signal,history,showToast,removeUser,perPage,orderBySpoilDate)=>{
   const controller=new AbortController()
   const signal=controller.signal
    const response=await makeRequest(signal,`products/user?page=1&per_page=${perPage}&ordering_by_spoilDate=${orderBySpoilDate}`,'GET',{},true)
    const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.results    
    else{
        const response=await makeRequest(signal,'products/user','GET',{},true)
        return response.results.results
      }
}

export const deleteProductService=async(signal,history,showToast,removeUser,productId)=>{
    const response=await makeRequest(signal,`products/${productId}`,'DELETE',{},true)
    const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.results    
    else{
        const response=await makeRequest(signal,`products/${productId}`,'DELETE',{},true)
        return response.results.results
      }
}

export const getProductsByCategoryService=async(signal,history,showToast,removeUser,categoryId,perPage)=>{
    const response=await makeRequest(signal,`products/user?page=1&per_page=${perPage}&category_id=${categoryId}`,'GET',{},true)
    const isResponseValid=await responseHandler(signal,response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.results    
    else{
        const response=await makeRequest(signal,`products/user?page=1&per_page=${perPage}&category_id=${categoryId}`,'GET',{},true)
        return response.results.results
      }
}