
const responseHandler=async (signal,response,history=null,showToast=null,removeUser=null)=>{
    const url='http://127.0.0.1:5000'
    if (response.status===500){
        //Enviar a la pagina de error
        history('/error')
    }
    if (response.status <= 404 && response.status >=400){
        if(response.status===401){
            if(localStorage.getItem('user')){
                const user=JSON.parse(localStorage.getItem("user"))
                const refresh=user.refresh_token
                // HEADER COMPOSITION
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("accept", "application/json");
                myHeaders.append("Authorization",`Bearer ${refresh}`);
                // FULL COMPOSITION
                let compose = {};
                compose.method = "POST";
                compose.mode = "cors";
                compose.credentials = "include";
                compose.headers = myHeaders;
                compose.signal=signal

                const response= await fetch(`${url}/auth/token/refresh`,compose)
                const data=await response.json()
                if (response.ok) {
                    const access_token=data.access_token
                    user.access_token=access_token
                    localStorage.setItem("user",JSON.stringify(user))
                }
                if(response.status===401){
                    removeUser()
                    history("/login")
                }
                return false
            }
           
        }
        showToast(response.results.message)
       
        return false
    }
    if(response.status <= 204 && response.status >=200){
        return true
    }
}

export default responseHandler