import React, { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom"
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
                    <input name="name" type="text" onChange={handleChange} value={form.name} />
                    <input name="qty" type="number" onChange={handleChange} value={form.qty} />
                    <input name="unit" type="text" onChange={handleChange} value={form.unit} />
                    <input name="duedate" type="date" onChange={handleChange} value={form.duedate} />
                    <button type="submit" >Crear</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct