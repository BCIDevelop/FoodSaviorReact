import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'

const UpdateProduct = ( {data, navigate, id} ) => {
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( data.find( function (d) { return d.id === parseInt(id || 0); }) ) ;

    const handleChange = (e) =>{
        instForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }
    const updateForm = ( upForm ) =>{
        const dbData = data.map( el => el.id === upForm.id ? upForm : el);
        localStorage.setItem( 'product', JSON.stringify(dbData) );
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if ( !form.name ){
            showToast( 'No se puede dejar en blanco', 'Warning');
            return ;
        }
        if( !form.id ){
            showToast("No tiene registrado un ID");
        }else{
            updateForm(form);
            showToast("Actualizar");
        }
    };
    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Actualizar Producto</h3>
            <div className={style.contentFormProduct}>
                <form onSubmit={handleSubmit}>
                    <div className={style.contentLink}>
                        <Link to="../product" className={style.returnA}>
                            <i className="fa-solid fa-arrow-left"></i> Regresar
                        </Link>
                    </div>
                    <div className={style.prevImage}>
                        <img src={form.src} alt={form.alt} />
                    </div>
                    <input name="name" type="text" onChange={handleChange} value={form.name} />
                    <input name="alt" type="text" onChange={handleChange} value={form.alt} />
                    <input name="unit" type="text" onChange={handleChange} value={form.unit} />
                    <input name="spoilDate" type="date" onChange={handleChange} value={form.spoilDate} />
                    <button type="submit" >Actualizar</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct