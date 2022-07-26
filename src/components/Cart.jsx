import React, { useState, useContext } from 'react'
import { cartContext } from './CartContext/CartContext'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { productsInCart } = useContext(cartContext)
  
  console.log(productsInCart)


  return (
    productsInCart.length === 0 
    ? <h1>No existen productos en el carrito.<Link to={'/'}><button>Volver a Inicio</button></Link></h1>
    : <>
        {productsInCart.map(product =>
            <div className={styles.productContainer} key={product.id}>
            <img src={product.imgUrl} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.qty}</p>
            <button>X</button>
          </div>
        )}
    </>
  )
}


export default Cart