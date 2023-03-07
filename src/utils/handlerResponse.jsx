
const responseHandler=async (response,history=null,showToast=null,removeUser=null)=>{
    const url='http://127.0.0.1:5000'
    if (response.status===500){
        //Enviar a la pagina de error
        history('/error')
    }
    if (response.status <= 404 && response.status >=400){
        if(response.status===401){
            if(localStorage.getItem('user')){
                const myHeaders = new Headers();
                const user=JSON.parse(localStorage.getItem("user"))
                const refresh=user.refresh_token
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization",`Bearer ${refresh}`)
                const response= await fetch(`http://127.0.0.1:5000/auth/token/refresh`,{
                    method: 'POST',
                    mode: "cors", 
                    credentials:"include",
                    headers:myHeaders
                })
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
        console.log(response)
        return false
    }
    if(response.status <= 204 && response.status >=200){
        return true
    }
}

export default responseHandler