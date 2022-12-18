import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import FormCategory from './FormCategory'

const UpdateCategory = ( {data, navigate, id} ) => {
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( data.find( function (d) { return d.id === parseInt(id || 0); }) ) ;

    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Actualizar Categoria</h3>
            <div className={style.contentFormProduct}>
                <FormCategory data={form} activity_action="update" />
            </div>
        </div>
    )
}

export default UpdateCategory