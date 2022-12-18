import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import FormInventory from './FormInventory'

const UpdateInventory = ( {data, navigate, id} ) => {
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( data.find( function (d) { return d.id === parseInt(id || 0); }) ) ;
    console.log(form);
    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Actualizar Producto</h3>
            <div className={style.contentFormProduct}>
                <FormInventory data={form} activity_action="update" />
            </div>
        </div>
    )
}

export default UpdateInventory