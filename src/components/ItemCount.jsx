import React, {useState} from 'react'
import styles from './ItemCount.module.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    
    let [contador, setContador] = useState(initial)

    const sumar = () => {
        if (contador < stock) {setContador(contador += 1)}
    }

    const restar = () => {
        if(contador > initial) {setContador(contador -= 1)}
    }

    const agregarAlCarrito = (e) =>{
        onAdd(contador)
    }
    

    return (
        <>
            <div className={styles.itemCount}>
                <div className={styles.itemCountElements}>
                    <button onClick={restar}>-</button>
                    <p className={styles.counter}>{contador}</p>
                    <button onClick={sumar}>+</button>
                </div>
                <button className={styles.btnAdd} onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount