import makeRequest from "./api.service"
import responseHandler from "../utils/handlerResponse"

export const getProductById=async(history,showToast,removeUser,id)=>{
  console.log(id);
  const response=await makeRequest(`products/${id}`,'GET',{},true)
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  {
    // console.log(response);
    return response.results    
  }
  else{
      const response=await makeRequest('products','GET',{},true)
      return response.results.results
    }
}

export const getAllProductsService=async(history,showToast,removeUser,perPage = 5)=>{
  const response=await makeRequest(`products?page=1&per_page=${perPage}`,'GET',{},true)
  const isResponseValid=await responseHandler(response,history,showToast,removeUser)
  if (isResponseValid)  return response.results.results    
  else{
      const response=await makeRequest('products','GET',{},true)
      return response.results.results
    }
}

export const getProductsService=async(history,showToast,removeUser,perPage,orderBySpoilDate)=>{
    const response=await makeRequest(`products/user?page=1&per_page=${perPage}&ordering_by_spoilDate=${orderBySpoilDate}`,'GET',{},true)
    const isResponseValid=await responseHandler(response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.results    
    else{
        const response=await makeRequest('products/user','GET',{},true)
        return response.results.results
      }
}

export const deleteProductService=async(history,showToast,removeUser,productId)=>{
    const response=await makeRequest(`products/${productId}`,'DELETE',{},true)
    const isResponseValid=await responseHandler(response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.results    
    else{
        const response=await makeRequest(`products/${productId}`,'DELETE',{},true)
        return response.results.results
      }
}

export const getProductsByCategoryService=async(history,showToast,removeUser,categoryId,perPage)=>{
    const response=await makeRequest(`products/user?page=1&per_page=${perPage}&category_id=${categoryId}`,'GET',{},true)
    const isResponseValid=await responseHandler(response,history,showToast,removeUser)
    if (isResponseValid)  return response.results.results    
    else{
        const response=await makeRequest(`products/user?page=1&per_page=${perPage}&category_id=${categoryId}`,'GET',{},true)
        return response.results.results
      }
}