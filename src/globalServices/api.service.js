 const makeRequest = async (context,method,data,hasCredentials)=>{
    try{
    const url='http://127.0.0.1:5000'
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if (hasCredentials) {
        const user=JSON.parse(localStorage.getItem("user"))
        const token=user.access_token
        myHeaders.append("Authorization",`Bearer ${token}`)
    }
    const body=Object.keys(data).length>0 ?  JSON.stringify(data) : null
    const credentials=hasCredentials ? "include" : "omit"
    const response=await fetch(`${url}/${context}`,{
        method: method,
        mode: "cors", 
        body:body,
        credentials:credentials,
        headers:myHeaders
    })
    const result=response.status!==204 ? await response.json() : {}
    const status=response.status
    console.log(result)
    return {results:result,status:status}
    }
    catch(error){
        console.log(error)
    }
}
export default makeRequest  