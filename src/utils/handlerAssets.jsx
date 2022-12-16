import { CategoryModel } from "../model/CategoryModel"



export function handlerByUser(items,userId){
   return items.filter(element=> element.userId===userId)
}

export function joinTableProduct(table1,table2){
    return  table1.filter(element=> table2.some(item=> item.productId === element.id))
}
export function getCategoryId(categoryName){
    return  CategoryModel().filter(element=> element.name===categoryName)[0].id
}