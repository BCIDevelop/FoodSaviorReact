import React, { useContext, useState } from 'react'
import {useNavigate, Link} from "react-router-dom"
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'

const FormCategory = ( {data, activity_action} ) => {
    const {user,removeUser}=useContext(UserContext)
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( data ) ;
    const navigateTo = useNavigate();

    const handleChange = (e) =>{
        instForm({
            ...form,
            [ e.target.name ] : e.target.value
        });
    }
    const changeFavorite = (e) => {
        e.target.name = e.target.getAttribute("name");
        e.target.value = "0";
        if ( e.target.getAttribute("value") === "0" ){
            e.target.value = "1";
        }
        handleChange( e );
    }

    const createForm = ( newform ) =>{
        newform.id = Date.now();
        instForm(newform);
        const dbData = JSON.parse(localStorage.getItem('categories'));
        dbData.push( newform );
        localStorage.setItem( 'categories', JSON.stringify(dbData) );
        const updateProducto = `./../update/${newform.id}`;
        return navigateTo( updateProducto );
    };
    const updateForm = ( upForm ) =>{
        const dbData = JSON.parse(localStorage.getItem('categories')).map( el => el.id === upForm.id ? upForm : el);
        localStorage.setItem( 'categories', JSON.stringify(dbData) );
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if ( !form.name ){
            showToast( 'No se puede dejar en blanco', 'Warning');
            return ;
        }else{
            updateForm(form);
            showToast("Actualizar");
        }
        if (activity_action === "create") {
            return createForm(form);
        }
    };
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.contentLink}>
                <Link to="../category" className={style.returnA}>
                    <i className="fa-solid fa-arrow-left"></i> Regresar / 
                    <i><span>{form.name}</span></i>
                </Link>
                { 
                    activity_action === "update" ?
                    <span 
                        className={style.favorite}
                        onClick={changeFavorite} 
                        data-favorite={form.favorite} >
                        <i className="fa-regular fa-star"
                        name="favorite" 
                        value={form.favorite}></i>
                    </span>:
                    <span></span>
                }
            </div>
            <div className={style.contentField}>
                <span>Nombre:</span>
                <input name="name" type="text" onChange={handleChange} value={form.name} />
            </div>
            <div className={style.contentField}>
                {
                    activity_action === "update" ?
                    <button type="submit" >Actualizar</button>
                    : 
                    <button type="submit" >Crear</button>
                    
                }
            </div>
        </form>
    )
}

export default FormCategory