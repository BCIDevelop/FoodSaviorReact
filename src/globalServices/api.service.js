 const makeRequest = async (context,method,data,hasCredentials,bodyFormat="row")=>{
    try{
        const url='http://127.0.0.1:5000'
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("accept", "application/json");
        if (hasCredentials) {
            const user=JSON.parse(localStorage.getItem("user"))
            const token=user.access_token
            myHeaders.append("Authorization",`Bearer ${token}`)
        }
        let body=null
        console.log(bodyFormat);
        console.log(data);
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
            headers:myHeaders
        }
        console.log("consultando")
        console.log( `${url}/${context}` );
        const response=await fetch(`${url}/${context}`, requestOptions)
            // .then(response => response.text())
            // .then(result => console.log(result))
            // .catch(error => console.log('error', error))
        
        console.log("imprime el response")
        const result=response.status!==204 ? await response.json() : {}
        const status=response.status
        return {results:result,status:status}
    }
    catch(error){
        console.log(error);
    }
}
export default makeRequest  