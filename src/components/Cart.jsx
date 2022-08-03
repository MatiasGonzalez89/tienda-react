import React, { useState, useContext, useEffect } from 'react'
import { cartContext } from './CartContext/CartContext'
import { Link } from 'react-router-dom'
import styles from './Cart.module.css'
import { db } from '../Firebase/firebase'
import { doc, addDoc, collection, serverTimestamp } from 'firebase/firestore'

const Cart = () => {

  const { productsInCart, removeItem } = useContext(cartContext)
  const [idVentas, setIdVentas] = useState("")
  const headers = ["N°", "", "Producto", "Precio Unit.", "Cantidad", "Total", ""]
  let [total, setTotal] = useState (0)
  const {product} = productsInCart

  const remove = (e) => {
    removeItem(e.target.value)
    calcularTotal()
  }

  const calcularTotal = () => {
    let suma = 0
    productsInCart.forEach(elem => {
        suma += elem.price * elem.qty
    })
    setTotal(suma)
  }

  useEffect(() => {
  calcularTotal()

}, [productsInCart, total])

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas')
    addDoc(ventasCollection, {
      items: productsInCart,
      date: serverTimestamp()
    })
  }

  return (
    <div className={styles.container}>

      {productsInCart.length === 0

        ? <div className={styles.cartMessage}>
          <p>No existen productos en el carrito</p>
          <div><Link to={'/'}><button>Volver a Inicio</button></Link></div>
          </div>

        : <div className={styles.cart}>
            <div className={styles.cartContainer}>
              {headers.map(elem =>
                <div className={styles.tableHeader}>{elem}</div>
              )}
            </div>

            {productsInCart.map((product, i) =>
              <div className={styles.tableContainer} key={product.id}>
                <div className={styles.tableItem}>{i + 1}</div>
                <img className={styles.tableImg} src={product.imgUrl} alt={product.title} />
                <p className={styles.tableItem}>{product.title}</p>
                <p className={styles.tableItem}>${product.price}</p>
                <p className={styles.tableItem}>{product.qty}</p>
                <p className={styles.tableItem}>${product.price * product.qty}</p>
                <button className={styles.tableButton} value={product.id} onClick={remove}>X</button>
              </div>
            )}
            <div>
              <p className={styles.tableTotal}>Precio Final: ${total}</p>
            </div>
          </div>
      }
    </div>
  )
}


export default Cart