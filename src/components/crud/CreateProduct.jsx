import React, { useContext, useState } from 'react'
import {useNavigate, Link} from "react-router-dom"
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'

const CreateProduct = ( {data} ) => {
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( data ) ;
    const navigateTo = useNavigate();

    const handleChange = (e) =>{
        instForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }
    const createForm = ( newform ) =>{
        newform.id = Date.now();
        instForm(newform);
        const dbData = JSON.parse(localStorage.getItem('product'));
        dbData.push( newform );
        localStorage.setItem( 'product', JSON.stringify(dbData) );
        const updateProducto = `./../update/${newform.id}`;
        return navigateTo( updateProducto );
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if ( !form.name ){
            showToast( 'No se puede dejar en blanco', 'Warning');
            return ;
        }
        return createForm(form);
    };
    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Crear Producto</h3>
            <div className={style.contentFormProduct}>
                <form onSubmit={handleSubmit}>
                    <div className={style.contentLink}>
                        <Link to="../product" className={style.returnA}>
                            <i className="fa-solid fa-arrow-left"></i> Regresar
                        </Link>
                    </div>
                    <input name="name" type="text" onChange={handleChange} value={form.name} />
                    <input name="alt" type="text" onChange={handleChange} value={form.alt} />
                    <input name="unit" type="text" onChange={handleChange} value={form.unit} />
                    <input name="spoilDate" type="date" onChange={handleChange} value={form.spoilDate} />
                    <button type="submit" >Crear</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct