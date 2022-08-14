import React, { useState, useContext } from 'react'
import { cartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import styles from '../Styles/Cart.module.css'
import { db } from '../Firebase/firebase'
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import Formulario from '../components/Formulario'


const Cart = () => {

  const { productsInCart, removeItem, total } = useContext(cartContext)
  const [form, setForm] = useState([])
  const [idVenta, setIdVenta] = useState("")
  const [realizaCompra, setRealizaCompra] = useState(false)
  const [finalizar, setFinalizar] = useState(false)

  const remove = (e) => {
    removeItem(e.target.value)
  }

  const obtenerDatos = (data) => {
    setForm(data)
  }

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas')
    addDoc(ventasCollection, {
      comprador: form,
      items: productsInCart,
      date: serverTimestamp(),
      total: total
    })
      .then((result) => {
        setIdVenta(result.id)
      })
    productsInCart.forEach(product => {
      const updateCollection = doc(db, "productos", product.id)
      updateDoc(updateCollection, { stock: product.stock - product.qty })
    });
    setFinalizar(true)
  }

  const handleClick = () => {
    setRealizaCompra(true)
  }

  return (
    <div className={styles.container}>
      {productsInCart.length === 0
        
        ? <div className={styles.cartMessage}>
          <p>No existen productos en el carrito</p>
          <div><Link to='/'><button className={styles.btnMessage}>Volver a Inicio</button></Link></div>
        </div>

        : !realizaCompra //Es el estado que usa el ternario para mostrar los items del carrito o caso contrario muestra el formulario

          ? <div className={styles.cart}>

            <div className={styles.cartList}>

              <div className={styles.headersContainer}>
                  <div className={styles.tableHeader}>N°</div>
                  <div className={styles.tableHeader}></div>
                  <div className={styles.tableHeader}>Producto</div>
                  <div className={styles.tableHeader}>Precio Unit.</div>
                  <div className={styles.tableHeader}>Cantidad</div>
                  <div className={styles.tableHeader}>Total</div>
                  <div className={styles.tableHeader}></div>
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

            <div>
              <button className={styles.btnComprar} onClick={handleClick}>Comprar</button>
            </div>
          </div>

          : !finalizar //Segundo estado para, a traves del ternario, mostrar el mensaje final de la compra con el idVenta

            ? <div className={styles.formulario}>
              <Formulario obtenerDatos={obtenerDatos} finalizarCompra={finalizarCompra} idVenta={idVenta} />
            </div>

            : <div>
              <h1 className={styles.mensajeFinal}>Su compra se realizo con exito!</h1>
              <h1 className={styles.mensajeFinal}>El codigo de su compra es {idVenta}</h1>
            </div>
      }
    </div>
  )
}

export default Cart