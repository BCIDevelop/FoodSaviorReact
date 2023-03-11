import React, { useContext, useState, useEffect } from 'react'
import {useNavigate, Link} from "react-router-dom"
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
import { getCategoryById, setCategoriesUpdate, setCategoriesCreate } from '../../globalServices/categories.service'

const FormCategory = ( {identify, activity_action} ) => {
    const {user,removeUser}=useContext(UserContext)
    const [ idCategory, setIdCategory ] = useState( identify || 0 )
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( { id : 0, name : "", favorite: 0 } ) ;
    const navigateTo = useNavigate();

    async function getCategory(){
        const response = await getCategoryById(history,showToast,removeUser, idCategory);
        instForm( response );
    }

    useEffect(() => {
        idCategory > 0 && getCategory()
        return 
    }, [idCategory])
    

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
    async function setCategory( formDataContent ){
        const response = await setCategoriesCreate(history,showToast,removeUser, formDataContent);
        instForm( response );
    }

    const createForm = ( newform ) =>{
        let formdata = new FormData();
        const arrayForm = Object.keys(newform);
        var formDataContent = new FormData();
        for (let index = 0; index < arrayForm.length; index++) {
            let fieldName = arrayForm[index];
            let fieldValue = form[fieldName];
            formDataContent.append(fieldName, fieldValue );
            
        }
        setCategory(formDataContent)
        
        // newform.id = Date.now();
        // instForm(newform);
        // const dbData = JSON.parse(localStorage.getItem('categories'));
        // dbData.push( newform );
        // localStorage.setItem( 'categories', JSON.stringify(dbData) );

        const updateProducto = `./../../category`;
        return navigateTo( updateProducto );
    };
    const updateForm = ( upForm ) =>{
        // const dbData = JSON.parse(localStorage.getItem('categories')).map( el => el.id === upForm.id ? upForm : el);
        // localStorage.setItem( 'categories', JSON.stringify(dbData) );

        async function update(){
            const response = await setCategoriesUpdate(history,showToast,removeUser, idCategory, upForm);
            console.log(response);
        }
        update()

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