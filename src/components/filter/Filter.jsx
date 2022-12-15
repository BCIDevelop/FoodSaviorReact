import React from 'react'
import styles from './filter.module.css'
import { CategoryModel } from '../../model/CategoryModel'
import { useState } from 'react'
const Filter = ({chipSelected}) => {
    const [selected,setSelected]=  useState(new Array(CategoryModel().length).fill(false))
 
    function chipSelectedComponent(e,chipName,index){
            const chips =document.querySelectorAll('.chips')
            const isSelected=  selected.findIndex(element=>element===true)
          if(isSelected!==-1){
              selected.fill(false)
              if(isSelected === index) {
               chipSelected(chipName,false,'default') 
               e.target.style.backgroundColor='rgba(33, 33, 33, 0.08)'
              }
              else {
                selected[index]=true
                chipSelected(chipName,true,'reset') 
                chips[isSelected].style.backgroundColor='rgba(33, 33, 33, 0.08)'
                e.target.style.backgroundColor='#56722c'
              }
          }
          else{
            selected[index]=true
            chipSelected(chipName,true,'default') 
            e.target.style.backgroundColor='#56722c'
          }
          setSelected(selected)
       
    }
  return (
    <div className={styles.filtrosContainer}>
      <div className={styles.textContainer}>

        <h3 className={styles.subtitle}>FILTROS</h3>
      </div>
    <div className={styles.chipsContainer}>
      { CategoryModel().map((element,index)=>(
          <div className='chips' key={`filter${index}`} onClick={(e)=>chipSelectedComponent(e,element.name,index)}>{element.name}</div>
      ))

      }
        
       
    </div>
 </div>
  )
}

export default Filter
