import React, { useContext, useState } from 'react'
import style from './product.module.css'
import FormProduct from './FormProduct'

const CreateProduct = ( {data} ) => {
    const [form, instForm] = useState( data ) ;

    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Crear Producto</h3>
            <div className={style.contentFormProduct}>
                <FormProduct data={form} activity_action="create" />
            </div>
        </div>
    )
}

export default CreateProduct