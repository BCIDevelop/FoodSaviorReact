import React,{useState,useEffect,useContext} from 'react'
import moment from 'moment'
import {useNavigate, Link} from "react-router-dom"
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import notImage from './../../img/productoSinImagen.png'
import { UserContext } from '../../context/UserContext'
import { getCategories } from '../../globalServices/categories.service'
import { setProductByIdAndUser } from '../../globalServices/products.service'
import { LoaderContext } from '../../context/LoaderContext'

const FormProduct = ( {data, activity_action} ) => {
    const [fileContent, setFileContent] = useState( {
        filename : "", 
        content : "",
    } );
    let formdata = new FormData();
    const [newDate, setNewDate ] =  useState(  moment(data.spoilDate).format('YYYY-MM-DD') );
    const _today_ = moment();
    data.spoilDate = newDate.toLocaleString();
    const [ categoriesDB, setCategoriesDB] = useState([]);
    const {user,removeUser}=useContext(UserContext)
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( data ) ;
    const navigateTo = useNavigate();
    const {toogleLoader} = useContext(LoaderContext)

    const handleChange = (e) =>{
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        console.log(fieldValue);
        if ( activity_action == "create" && fieldName == "image"){
            const [files] = e.target.files;
            fileContent.content = files;
            setFileContent({
                ...fileContent,
                [ "filename" ] : fieldValue
            });
        }

        if (e.target.name == "spoilDate"){
            setNewDate( moment(e.target.value).format('YYYY-MM-DD') )
        }
        if ( fieldName !== "image"){
            instForm({
                ...form,
                [ fieldName ] : fieldValue
            });
        } 
    }    
    async function processGetCategories(){
        const response = await getCategories(history,showToast,removeUser);
        toogleLoader();
        setCategoriesDB( response );
        console.log(data);
    }
    useEffect(()=>{
        processGetCategories();
    },[])

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

    async function createForm (  ) {
        const arrayForm = Object.keys(form);
        var formDataContent = new FormData();
        for (let index = 0; index < arrayForm.length; index++) {
            let fieldName = arrayForm[index];
            let fieldValue = form[fieldName];
            if( fieldName === "image"){
                formDataContent.append(fieldName, fileContent.content, fileContent.filename );
            }else{
                formDataContent.append(fieldName, fieldValue );
                console.log(`${fieldName}, ${fieldValue}`);
            }
        }
        console.log( formDataContent.get("name") );
        const response = await setProductByIdAndUser(history,showToast,removeUser, formDataContent);
        console.log(response);
        // newform.id = Date.now();
        // instForm(newform);
        // const dbData = JSON.parse(localStorage.getItem('products'));
        // dbData.push( newform );
        // localStorage.setItem( 'products', JSON.stringify(dbData) );

        // const updateProducto = `./../update/${newform.id}`;
        // return navigateTo( updateProducto );
    };
    const updateForm = ( upForm ) =>{
        const dbData = JSON.parse(localStorage.getItem('products')).map( el => el.id === upForm.id ? upForm : el);
        localStorage.setItem( 'products', JSON.stringify(dbData) );
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        console.log(fileContent);
        if ( !fileContent.filename ){
            showToast( 'Es necesario cargar una imagen', 'Warning');
            return ;
        }
        // return ;
        if ( !form.name ){
            showToast( 'No se puede dejar en blanco', 'Warning');
            return ;
        }else{
            updateForm(form);
            showToast("Actualizar");
        }
        if (activity_action === "create") {
            return createForm();
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
                {
                    activity_action === "update" &&
                    <>
                        <input name="image" type="text" onChange={handleChange} value={form.image} disabled/>
                        {/* <input name="alt" type="text" onChange={handleChange} value={form.alt} /> */}
                        <p><i>(*) Este contenido se mostrar solo si no tiene una imagen referenciada</i></p> 
                    </>
                }
                {
                    activity_action !== "update" & !fileContent.filename 
                    ?  <>
                        <input 
                            accept="image/jpg,image/gif,image/png,image/svg+xml"
                            name="image" 
                            type="file" 
                            onChange={handleChange} 
                            value={form.image} />
                    </>
                    : ""
                }
                {
                    activity_action !== "update" & fileContent.filename.length > 0 
                    ?  <>
                        {fileContent.filename}
                    </>
                    : ""
                }
            </div>
            <div className={style.contentField}>
                <span>Categoria:</span>
                <select name="category_id" onChange={handleChange}>
                    <option key="0">SELECCIONAR</option>
                    {
                        <>
                            {
                                activity_action === "update" ?
                                categoriesDB.map( el => 
                                    <option 
                                        value={el.id} 
                                        key={el.id.toString()}  
                                        selected={el.name == form.category.name ? "selected" : ""}
                                        >{el.name}</option>
                                    )
                                :
                                    categoriesDB.map( el => 
                                        <option 
                                            value={el.id} 
                                            key={el.id.toString()}  
                                            >{el.name}</option>
                                    )
                            }
                        </>
                    }
                </select>
            </div>
            <div className={style.contentField}>
                <span>Codigo Barra:</span>
                <input name="barcode" type="text" onChange={handleChange} value={form.barcode} />
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
                <div className={style.contentField}>
                    <span>Fecha:</span>
                    <input 
                        name="spoilDate" 
                        type="date" 
                        onChange={handleChange} 
                        value={form.spoilDate} 
                        min={form.spoilDate} />
                </div>
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