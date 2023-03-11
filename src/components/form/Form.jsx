import React from 'react'
import './form.css'
const Form = ({onSubmit,inputs,height,disabledForm=false,buttonText='Submit',values={}}) => {
   
    const inputArray=inputs.map((element)=>{
        if(element==='Last Name'){
           return 'last_name'
        }
        else return element.toLowerCase()
    })
    
    function submitForm(e){
        onSubmit(e)
    }
    const valueInput=values
  return (
    <div>
       <form onSubmit={submitForm} style={{height:height}} className="form-container" noValidate>
            {
                inputs.map((input,index)=>(
                  
                    <div  key={`input${index}`} className="input-container">
                    <input id={input.toLowerCase()==='password'? 'password-input': input.toLowerCase()} defaultValue={valueInput[inputArray[index]]} autoComplete={input.toLowerCase()} disabled={disabledForm} className={Object.keys(values).length>0 ? "input input-profile animation-input" :"input"} required="required" type={(input.toLowerCase()==='password' ||input.toLowerCase()===  'confirm password') ?'password':'text'}/>
                    <i></i>
                    <label  id="label-1-error" className={Object.keys(values).length>0 ? "label-form label-text profile-focus" :"label-form label-text"}  htmlFor="">{input}</label>
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
