
export function SessionInit(location){
    const inputs=document.querySelectorAll('.input')
    const errorIcon=document.querySelectorAll('.material-symbols-outlined')
    const label=document.querySelectorAll('label')  
    const errorText=document.querySelectorAll('.text-error')
    inputs.forEach((elements,index)=>{
    elements.addEventListener('change',(e)=>{
        if (!e.target.validity.valid) {
          invalidEffect(index)  
        }else {
            label[index].classList.remove('invalid')
            errorIcon[index].style.display='none'
            errorText[index].style.display='none'
        }    
        if(e.target.value!=''){
            elements.classList.add('animation-input')
        }else  elements.classList.remove('animation-input')
    })
})
}

export function invalidEffect(index,textError="Please check your data"){
    const errorIcon=document.querySelectorAll('.material-symbols-outlined')
    const label=document.querySelectorAll('label')  
    const errorText=document.querySelectorAll('.text-error')
    if(label[index].classList.contains('invalid')){
        label[index].classList.remove('invalid')
        label[index].offsetWidth
        label[index].classList.add('invalid')
    } else label[index].classList.add('invalid')
    errorIcon[index].style.display='block'
    errorText[index].textContent=textError
    errorText[index].style.display='flex'
}