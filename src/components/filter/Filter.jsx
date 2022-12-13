import React from 'react'
import styles from './filter.module.css'
import { CategoryModel } from '../../model/CategoryModel'
const Filter = () => {
  function chipSelected(){
    
  }
  return (
    <div className={styles.filtrosContainer}>
      <div className={styles.textContainer}>

        <h3 className={styles.subtitle}>FILTROS</h3>
      </div>
    <div className={styles.chipsContainer}>
      { CategoryModel().map((element)=>(
          <div onClick={chipSelected}>{element.name}</div>
      ))

      }
        
       
    </div>
 </div>
  )
}

export default Filter
