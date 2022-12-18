   export function facebookClicked(){
    FB.login(function(response) {
        console.log(response)
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
          getFacebook()
        } else {
          // The person is not logged into your webpage or we are unable to tell. 
        }
      },{scope: 'public_profile,email'});
    }

      function getFacebook(){
        FB.api('/me?fields=picture,name,email', function(response) {
            console.log(response)
            const socialUser= {name:response.name,username:response.email,picture:response.picture.data.url}
            return socialUser
        })
    }    
    export function loginGmail(response){
      console.log('entro')
      console.log(response)
        const decoded_jwt=jwtJsDecode.jwtDecode(response.credential)
        const socialUser={name:decoded_jwt.payload.name,username:decoded_jwt.payload.email,picture:decoded_jwt.payload.picture}
        return socialUser
      }