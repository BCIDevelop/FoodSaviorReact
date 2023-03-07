import React from 'react'
import './form.css'
const Form = ({onSubmit,inputs,height,disabledForm=false,buttonText='Submit'}) => {
    function submitForm(e){
        onSubmit(e)
    }
  return (
    <div>
       <form onSubmit={submitForm} style={{height:height}} className="form-container" noValidate>
            {
                inputs.map((input,index)=>(
                    <div  key={`input${index}`} className="input-container">
                    <input value="Luis Lopez" autoComplete={input.toLowerCase()} disabled={disabledForm} className="input" required="required" type={input.toLowerCase()==='password' ||  'confirm password' ?'password':'text'}/>
                    <i className='apertura'></i>
                    <label id="label-1-error" className="label-text profile-focus" htmlFor="">{input}</label>
                    <span id="label-1-error" className="material-symbols-outlined">
                        error
                    </span>
                    <h5 className="text-error">Please check your data</h5>
                    </div>
                ))
            }
               
               
                
          <button className="btn-submit" type="submit">{buttonText}</button>
         
         
          </form>
    </div>
  )
}

export default Form
