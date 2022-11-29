import React from 'react'
import './form.css'
const Form = ({onSubmit}) => {
    function submitForm(e){
        onSubmit(e)
    }
  return (
    <div>
       <form onSubmit={submitForm} style={{height:"235.11px"}} className="form-container" noValidate>
          
           
          <div className="input-container">
              <input  autoComplete="email" className="input" required="required" type="email" id="email-input"/>
              <i></i>
            
  
                  <label id="label-2-error" className="label-email" htmlFor="email-input">Email</label>
                  <span id="span-2-error" className="material-symbols-outlined">
                      error
                  </span>
           
              <h5 className="text-error">Please check your data</h5>
          </div>
          <div className="input-container">
              <input autoComplete="new-password" className="input" required="required" type="password" id="password-input"/>
              <i></i>
            
  
                  <label id="label-3-error" className="label-password" htmlFor="password-input">Password</label>
                  <span id="span-3-error" className="material-symbols-outlined">
                      error
                  </span>
           
              <h5 className="text-error">Please check your data</h5>
          </div>
         
          <button className="btn-submit" type="submit">Submit</button>
         
         
          </form>
    </div>
  )
}

export default Form
