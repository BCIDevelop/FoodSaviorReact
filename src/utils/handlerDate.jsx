export function sortByDate(productos){
    console.log(productos)
    productos.sort((a,b)=>new Date(a.spoilDate).getTime()-new Date(b.spoilDate).getTime());
    console.log(productos)
    return productos
}
export function remainingDate(date){
    const DAYS_IN_MILISECONDS=86400000
    const remainingTime=new Date(date).getTime()-new Date().getTime()
    return  Math.floor(remainingTime/DAYS_IN_MILISECONDS)
}