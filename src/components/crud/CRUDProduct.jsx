import React, { useState } from 'react'
import style from './product.module.css'
import bannerImage from './../../img/product-banner.png'
import { useParams } from 'react-router-dom'
import Products from './Products'
import UpdateProduct from './UpdateProduct'
import {ProductModel} from './ProductModel'

const CRUDProduct = () => {
  const { action } = useParams();
  const { id } = useParams();
  
  if( localStorage.getItem('product') === null){
    localStorage.setItem( 'product', JSON.stringify(ProductModel()) );
  }
  const data = JSON.parse(localStorage.getItem('product'));

  return (
    <div className="bodyWroduct">
      {
        action === "update" && parseInt( id || 0 )  ? 
          <UpdateProduct data={data} id={parseInt( id || 0 )} /> : 
            data.map( el => 
                <Products key={el.id} item={el} /> 
            )
      }
      
    </div>
  )
  // let varifierId = data.find( function (d) { return d.id === parseInt(id || 0); });
  // const [ form, newForm ] = useState( varifierId );
  // if (action === "update") {
  //   if ( varifierId === undefined ) {
  //     return (
  //       <div className="bodyProduct">
  //         <h3 className={style.titleh3}>Actualizar Producto</h3>
  //         <div className="alert alert-warning">
  //           Registro no existe #{id}
  //         </div>
  //       </div>
  //     )
  //   }else{

  //     const handleChange = (e) =>{
  //       newForm({
  //         ...form, 
  //         [e.target.name] : e.target.value
  //       });
  //     }

  //     const handleSubmit = (e) =>{
  //       e.preventDefault();
  //       console.log(form);
  //       if ( !form.name ){
  //         alert( 'No se puede dejar en blanco');
  //         return ;
  //       }
  //     }

  //     return (
  //       <div className="bodyProduct">
  //         <h3 className={style.titleh3}>Actualizar Producto</h3>
  //         <div className={style.contentFormProduct}>
  //           <form onSubmit={handleSubmit}>
  //             <input name="name" type="text" onChange={handleChange} value={form.name} />
  //             <input name="qty" type="number" onChange={handleChange} value={form.qty} />
  //             <input name="unit" type="text" onChange={handleChange} value={form.unit} />
  //             <input name="duedate" type="date" onChange={handleChange} value={form.duedate} />
  //             <button type="submit" >Actualizar</button>
  //           </form>
  //         </div>
  //       </div>
  //     )
  //   }
  // }else{
  //   return (
  //     <div className="bodyWroduct">
  //       <h3 className={style.titleh3}>Mis Productos</h3>
  //       <div className={style.contentBanner}>
  //         <img className={style.bannerImage} src={bannerImage} />
  //       </div>
  //       { data.length === 0 ? <div> sin datos</div> : data.map( el => <CRUDItem key={el.id} item={el} /> ) }
  //     </div>
  //   )
  // }
}

export default CRUDProduct
