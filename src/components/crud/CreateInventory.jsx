import React, { useContext, useState } from 'react'
import style from './product.module.css'
import FormInventory from './FormInventory'

const CreateInventory = ( {data} ) => {
    const [form, instForm] = useState( data ) ;

    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Agregar Stock</h3>
            <div className={style.contentFormProduct}>
                <FormInventory data={form} activity_action="create" />
            </div>
        </div>
    )
}

export default CreateInventory