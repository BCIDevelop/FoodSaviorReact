import React, { useContext, useState } from 'react'
import style from './product.module.css'
import FormCategory from './FormCategory'

const CreateCategory = ( {data} ) => {
    const [form, instForm] = useState( data ) ;

    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Añadir Categoria</h3>
            <div className={style.contentFormProduct}>
                <FormCategory data={form} activity_action="create" />
            </div>
        </div>
    )
}

export default CreateCategory