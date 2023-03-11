import React,{useState,useEffect,useContext} from 'react'
import moment from 'moment'
import {useNavigate, Link} from "react-router-dom"
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import notImage from './../../img/productoSinImagen.png'
import { UserContext } from '../../context/UserContext'
import { getCategories } from '../../globalServices/categories.service'
import { setProductByIdAndUser, setProductUpdateById } from '../../globalServices/products.service'
import { LoaderContext } from '../../context/LoaderContext'
import Barcode from 'react-barcode';


const FormProduct = ( {data, activity_action, identified} ) => {
    const [fileContent, setFileContent] = useState( {
        filename : "", 
        content : "",
    } );
    let formdata = new FormData();
    const [idProduct, setIdProduct] = useState( identified )
    const [newDate, setNewDate ] =  useState(  moment( data.spoilDate ).format('YYYY-MM-DD')  );
    const _today_ = moment();
    data.spoilDate = moment( data.spoilDate ).format('YYYY-MM-DD');
    const [ categoriesDB, setCategoriesDB] = useState([]);
    const {user,removeUser}=useContext(UserContext)
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( data ) ;
    const [formUpdate, instFormUpdate] = useState( {} ) ;
    const navigateTo = useNavigate();
    const {toogleLoader} = useContext(LoaderContext)

    const handleFile = (e) =>{
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        const [files] = e.target.files;
        fileContent.content = files;
        setFileContent({
            ...fileContent,
            [ "filename" ] : fieldValue
        });
    }

    const handleChange = (e) =>{
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        if (e.target.name == "spoilDate"){
            setNewDate(  fieldValue )
        }
        if ( fieldName !== "image"){
            instForm({
                ...form,
                [ fieldName ] : fieldValue
            });
            if ( activity_action == "update" ){
                instFormUpdate({
                    ...formUpdate,
                    [ fieldName ] : fieldValue
                })
            }
        }
    }    
    async function processGetCategories(){
        const response = await getCategories(history,showToast,removeUser);
        // toogleLoader();
        setCategoriesDB( response.results );
    }
    useEffect(()=>{
        processGetCategories();
    },[])

    // useEffect( () => {
    //     instForm( data )
    // },[data])

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
        const favoriteDB =  [];
        // const favoriteDB =  JSON.parse(localStorage.getItem('favorites'));
        // const tmp = favoriteDB.find( function (d) { return d.productId === parseInt(form.id || 0); });
        // if ( tmp ){
        //     form.favorite = 1;
        // }
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

    async function createForm ( data  ) {
        const arrayForm = Object.keys(data);
        var formDataContent = new FormData();
        for (let index = 0; index < arrayForm.length; index++) {
            let fieldName = arrayForm[index];
            let fieldValue = form[fieldName];
            if( fieldName == "image"){

            }else{
                formDataContent.append(fieldName, fieldName == "category_id" ? parseInt(fieldValue) : fieldValue );
            }
        }
        if( fileContent.filename.length > 0 ){
            formDataContent.append("image", fileContent.content );
        }
        let updateProducto = `./`;
        let response = null;

        if (activity_action === "update") {
            response = await setProductUpdateById(history,showToast,removeUser, identified, formDataContent);
        }else{
            response = await setProductByIdAndUser(history,showToast,removeUser, formDataContent);
            updateProducto = `./../../../product`;
        }
        // return navigateTo( updateProducto );

        // newform.id = Date.now();
        // instForm(newform);
        // const dbData = JSON.parse(localStorage.getItem('products'));
        // dbData.push( newform );
        // localStorage.setItem( 'products', JSON.stringify(dbData) );

        // const updateProducto = `./../update/${newform.id}`;
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // return ;
        if ( !form.name ){
            showToast( 'No se puede dejar en blanco', 'Warning');
            return ;
        }
        if (activity_action === "create") {
            if ( !fileContent.filename ){
                showToast( 'Es necesario cargar una imagen', 'Warning');
                return ;
            }
            return createForm( form );
        }
        if (activity_action === "update") {
          
            return createForm( formUpdate );
        }
    };
    const printBarcode = () =>{
        print();
    }
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.contentLink}>
                <Link to="../product" className={style.returnA}>
                    <i className="fa-solid fa-arrow-left"></i> Regresar / 
                    <i><span>{form.name} ({idProduct})</span></i>
                </Link>
                { 
                    activity_action === "update" ?
                    <span>
                        <span 
                            className={style.favorite}
                            onClick={changeFavorite} 
                            data-favorite={form.favorite} >
                            <i className="fa-regular fa-star"
                            name="favorite" 
                            value={form.favorite}></i>
                        </span>
                        <span onClick={printBarcode}> <i className="fa fa-print" ></i> </span>
                    </span>
                    :
                    <span></span>
                }
            </div>
            <div className={style.contentField}>
                <span>Nombre:</span>
                <input name="name" type="text" onChange={handleChange} value={form.name} />
            </div>
            <div className={style.contentField}>
                <span>Description:</span>
                <input name="description" type="text" onChange={handleChange} value={form.description} />
            </div>
            
            <div className={style.contentField}>
                <span>URL:</span>
                <input 
                    accept="image/jpg,image/gif,image/png,image/svg+xml"
                    name="image" 
                    type="file" 
                    onChange={handleFile}
                    value={ fileContent.filename } />
                <div className={style.prevImage}>
                    {
                        form.image 
                        ?   <img  src={ form.image } 
                        alt={form.alt} /> 
                        :<img  src={ notImage } 
                        alt="cargando!"/> 
                    }
                    
                </div>
            </div>
            <div className={style.contentField}>
                <span>Codigo Barra:</span>
                {
                    form.barcode && 
                    <div className={style.contentFieldBarcode}>
                        <Barcode style="width:100%!important" value={form.barcode} />
                    </div>
                }
                <input name="barcode" type="text" onChange={handleChange} value={form.barcode} />
            </div>
            <div className={style.contentField}>
                <span>Categoria:</span>
                <select name="category_id" onChange={handleChange} >
                    <option key="0">SELECCIONAR</option>
                    {
                        <>
                            {
                                activity_action === "update" ?
                                categoriesDB.map( el => 
                                    <option 
                                        value={el.id} 
                                        key={el.id.toString()}  
                                        selected={el.name == form.category.name && "selected" }
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
                        value={form.spoilDate}  />
                </div>
            }
            <div className={style.contentField}>
                {
                    activity_action == "update" ?
                    <button type="submit" >Actualizar</button>
                    : 
                    <button type="submit" >Crear</button>
                    
                }
            </div>
        </form>
    )
}

export default FormProduct