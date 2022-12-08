import React from 'react'
import style from './product.module.css'
import bannerImage from './../../img/product-banner.png'

const Product = () => {
  return (
    <div className="bodyProduct">
      <h3 className={style.titleh3}>Mis Productos</h3>
      <div className={style.contentBanner}>
        <img className={style.bannerImage} src={bannerImage} />
      </div>
      <div className={style.contentCategory}>
        <ul>
          <li  className={style.ItemCategory}>
            <a href=".">
              <span><i class="fa-solid fa-list"></i></span>
              <span>Abarrotes</span>
              <span><i class="fa-solid fa-arrow-right"></i></span>
            </a>
          </li>
          <li  className={style.ItemCategory}>
            <a href=".">
              <span><i class="fa-solid fa-list"></i></span>
              <span>Frutas y Verduras</span>
              <span><i class="fa-solid fa-arrow-right"></i></span>
            </a>
          </li>
          <li  className={style.ItemCategory}>
            <a href="./product/probando">
              <span><i class="fa-solid fa-list"></i></span>
              <span>Congelado</span>
              <span><i class="fa-solid fa-arrow-right"></i></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Product
