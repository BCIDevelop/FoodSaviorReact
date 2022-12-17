import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import FormProduct from './FormProduct'

const UpdateProduct = ( {data, navigate, id} ) => {
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( data.find( function (d) { return d.id === parseInt(id || 0); }) ) ;

    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Actualizar Producto</h3>
            <div className={style.contentFormProduct}>
                <FormProduct data={form} activity_action="update" />
            </div>
        </div>
    )
}

export default UpdateProduct