export function sortByDate(productos){
    productos.sort((a,b)=>a.spoilDate.getTime()-b.spoilDate.getTime());
  
    return productos
}
export function remainingDate(date){
    const DAYS_IN_MILISECONDS=86400000
    const remainingTime=date.getTime()-new Date().getTime()
    return  Math.floor(remainingTime/DAYS_IN_MILISECONDS)
}