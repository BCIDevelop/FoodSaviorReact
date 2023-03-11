import React, { useContext, useEffect, useState } from 'react'
import style from './product.module.css'
import FormProduct from './FormProduct'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AlertContext } from '../../context/AlertContext'
import {UserContext} from "../../context/UserContext"
import { getProductById } from '../../globalServices/products.service'
import { LoaderContext } from '../../context/LoaderContext'
import moment from 'moment'

const UpdateProduct = ( {id} ) => {
    const [identified, setIdentified] = useState( id )
    const {showToast}= useContext(AlertContext)
    const [form, instForm] = useState( {
        name:"",
        description:"",
        image : "",
        spoilDate: moment( new Date() ).format('YYYY-MM-DD'),
        unit : "UNI",
        barcode : "",
        category_id: 1
      }) ;
    const {toogleLoader} = useContext(LoaderContext)
    const history=useNavigate()
    const {removeUser}=useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [activityAction, setActivityAction] = useState( "create" )
    async function consultaProducto() {
            const content= await getProductById(history,showToast,removeUser, identified)
            instForm(content)
            setLoading( true)
            setActivityAction("update")
    }
    useEffect(()=>{
        identified == 0 ? setLoading( true )
        : consultaProducto()
    },[ identified ])
    return (
        <div className="bodyProduct">
            <h3 className={style.titleh3}>Actualizar Producto {identified} </h3>
            <div className={style.contentFormProduct}>
                { loading && <FormProduct data={form} activity_action={activityAction} identified={id || 0 } /> }
            </div>
        </div>
    )
}

export default UpdateProduct