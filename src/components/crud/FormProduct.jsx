import React,{useState,useEffect,useContext} from 'react'
import {useNavigate, Link} from "react-router-dom"
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import notImage from './../../img/productoSinImagen.png'
import { UserContext } from '../../context/UserContext'

const FormProduct = ( {data, activity_action} ) => {
    console.log("Esto es lo que contiene");
    console.log(data);
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
    // useEffect(()=>{
    //     console.log(data);
    //     instForm({
    //         ...form,
    //         ["image"] : data.image
    //     })
    // },[])

    let qty = 0;
    // const getQty = () => {
    //     const kardexDB =  JSON.parse(localStorage.getItem('kardex'));
    //     kardexDB.map( function (e) {
    //         if ( form.id === e.product ){
    //             qty += parseInt( e.qty );
    //         }
    //     })
    // }
    // getQty();
    const favorite = () => {
        const favoriteDB =  JSON.parse(localStorage.getItem('favorites'));
        const tmp = favoriteDB.find( function (d) { return d.productId === parseInt(form.id || 0); });
        if ( tmp ){
            form.favorite = 1;
        }
    }
    favorite();
    const changeFavorite = (e) => {
        e.target.name = e.target.getAttribute("name");
        e.target.value = "0";
        if ( e.target.getAttribute("value") === "0" ){
            e.target.value = "1";
            const dbData = JSON.parse(localStorage.getItem('favorites'));
            dbData.push( { userId : user.mail, productId : form.id } );
            localStorage.setItem( 'favorites', JSON.stringify(dbData) );
        }
        handleChange( e );
    }

    const createForm = ( newform ) =>{
        newform.id = Date.now();
        instForm(newform);
        const dbData = JSON.parse(localStorage.getItem('products'));
        dbData.push( newform );
        localStorage.setItem( 'products', JSON.stringify(dbData) );
        const updateProducto = `./../update/${newform.id}`;
        return navigateTo( updateProducto );
    };
    const updateForm = ( upForm ) =>{
        const dbData = JSON.parse(localStorage.getItem('products')).map( el => el.id === upForm.id ? upForm : el);
        localStorage.setItem( 'products', JSON.stringify(dbData) );
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
                <Link to="../product" className={style.returnA}>
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
            <div className={style.prevImage}>
                {
                    form.image 
                    ?   <img  src={ form.image } 
                    alt={form.alt} /> 
                    :<img  src={ notImage } 
                    alt="cargando!"/> 
                }
                
            </div>
            <div className={style.contentField}>
                <span>Image:</span>
                <input name="src" type="text" onChange={handleChange} value={form.image} disabled/>
                {/* <input name="alt" type="text" onChange={handleChange} value={form.alt} /> */}
                <p><i>(*) Este contenido se mostrar solo si no tiene una imagen referenciada</i></p>
            </div>
            {/* <div className={style.contentField}>
                <span>Categoria:</span>
                <select name="category" onChange={handleChange}>
                    <option>SELECCIONAR</option>
                    {
                        categoriesDB.map( el => 
                            <option 
                                value={el.id} 
                                key={el.id} 
                                selected={el.id == form.category ? "SELECTED" : ""}
                                >{el.name}</option>
                            )
                    }
                </select>
            </div> */}
            <div className={style.contentField}>
                <span>Codigo Barra:</span>
                <input name="bardcode" type="text" onChange={handleChange} value={form.barcode} />
            </div>
            <div className={style.contentField}>
                <span>Stock:</span>
                <input name="stock" type="number" value={qty} disabled/>
            </div>
            <div className={style.contentField}>
                <span>Unidad:</span>
                <input name="unit" type="text" onChange={handleChange} value={form.unit} />
            </div>
            {
                // <div className={style.contentField}>
                //     <span>Fecha:</span>
                //     <input name="spoilDate" type="date" onChange={handleChange} value={form.spoilDate} />
                // </div>
            }
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

export default FormProduct