import React, { useContext, useState } from 'react'
import {useNavigate, Link} from "react-router-dom"
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import notImage from './../../img/productoSinImagen.png'
import { UserContext } from '../../context/UserContext'

const FormInventory = ( {data, activity_action} ) => {
    const lskardex = "kardex";
    const lsproduct = "products";
    const categoriesDB = JSON.parse(localStorage.getItem('categories'));
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
        const dbKardex = JSON.parse(localStorage.getItem(lskardex));
        dbKardex.push( newform );
        localStorage.setItem( lskardex, JSON.stringify(dbKardex) );
        const updateProducto = `./../update/${newform.id}`;
        return navigateTo( updateProducto );
    };
    const updateForm = ( upForm ) =>{
        const dbKardex = JSON.parse(localStorage.getItem(lskardex)).map( el => el.id === upForm.id ? upForm : el);
        localStorage.setItem( lskardex, JSON.stringify(dbKardex) );
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if ( !form.name && !form.identify ){
            showToast( 'No se puede dejar en blanco', 'Warning');
            return ;
        }else{
            if ( !form.name && form.identify ){
                const formProduct = JSON.parse(localStorage.getItem(lsproduct)).find( el => el.bardcode === form.identify );
                if ( formProduct ) {
                    form.product = formProduct.id;
                    form.name = formProduct.name;
                    form.unit = formProduct.unit;
                    showToast("Producto Encontrado");
                }else{
                    showToast("No se encontro el producto");
                }
                return
            }
            if ( !form.qty ){
                showToast("Ingresar Cantidad")
                return 
            }
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
                <Link to="../inventory" className={style.returnA}>
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
                <span>Identificador:</span>
                <input name="identify" type="text" onChange={handleChange} value={form.identify} />
            </div>
            <div className={style.contentField}>
                <span>Nombre:</span>
                <input name="name" type="text" onChange={handleChange} value={form.name} disabled/>
            </div>
            <div className={style.contentField}>
                <span>Cantidad:</span>
                <input name="qty" type="number" onChange={handleChange} value={form.qty} />
            </div>
            <div className={style.contentField}>
                <span>Unidad:</span>
                <input name="unit" type="text" onChange={handleChange} value={form.unit} disabled />
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

export default FormInventory