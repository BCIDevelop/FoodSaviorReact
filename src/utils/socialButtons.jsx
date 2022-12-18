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
            const socialUser= {name:response.name,mail:response.email,picture:response.picture.data.url}
            return socialUser
        })
    }    
 