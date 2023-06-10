const makeRequest = async (signal,context,method,data,hasCredentials,bodyFormat="row")=>{
    try{
        /* const url='https://foodsavior.onrender.com' */
        const url = 'http://127.0.0.1:5000'
        const myHeaders = new Headers();
        if (bodyFormat==='row'){
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("accept", "application/json");
        }

        
        if (hasCredentials) {
            const user=JSON.parse(localStorage.getItem("user"))
            const token=user.access_token
            myHeaders.append("Authorization",`Bearer ${token}`)
        }
        let body=null
       
        if (bodyFormat == "form-data") {
            body = data
        }else{
            body=Object.keys(data).length>0 ?  JSON.stringify(data) : null
        }
        const credentials=hasCredentials ? "include" : "omit"
        const requestOptions = {
            method: method,
            mode: "cors", 
            body:body,
            credentials:credentials,
            headers:myHeaders,
            signal
        }
        const response=await fetch(`${url}/${context}`, requestOptions)
        const result=response.status!==204 ? await response.json() : {}
        const status=response.status
        return {results:result,status:status}
    }
    catch(error){
        throw error
    }
}
export default makeRequest  