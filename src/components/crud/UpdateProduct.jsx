import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import { AlertContext } from '../../context/AlertContext'
import FormProduct from './FormProduct'
import {UserContext} from "../../context/UserContext"
import { getProductById } from '../../globalServices/products.service'
import { LoaderContext } from '../../context/LoaderContext'

const UpdateProduct = ( {id} ) => {
    console.log(parseInt(id || 0));
    const {showToast}= useContext(AlertContext)
    // const [form, instForm] = useState( data.find( function (d) { return d.id === parseInt(id || 0); }) ) ;
    const [form, instForm] = useState( {} ) ;
    const {toogleLoader} = useContext(LoaderContext)
    const history=useNavigate()
    const {removeUser}=useContext(UserContext)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        toogleLoader()
        const response = async () =>  {
            const response= await getProductById(history,showToast,removeUser, parseInt(id))
            // toogleLoader()
            // favoritos.current=response
            instForm(response)
            setLoading( true)
            return response
        }
        instForm( response )
    },[])

    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Actualizar Producto</h3>
            <div className={style.contentFormProduct}>
                {
                    loading &&
                    <FormProduct data={form} activity_action="update" />
                }
            </div>
        </div>
    )
}

export default UpdateProduct