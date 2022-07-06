import React, { useState } from 'react'
import styles from './ItemCount.module.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
        contador < stock && setContador(contador + 1)
        contador >= stock && setContador(stock)
    }

    const restar = () => {
        contador > initial && setContador(contador - 1)
        contador == initial && setContador(initial)
    }

    return (
        <>
            <div className={styles.cardShop}>
                <div className={styles.cardImg}>Imagen</div>
                <div className={styles.btnCounter}>
                    <button className={styles.btn} onClick={restar}>-</button>
                    <p className={styles.counter}>{contador}</p>
                    <button className={styles.btn} onClick={sumar}>+</button>
                </div>
                <button className={styles.btnAdd} onClick={onAdd}>Comprar</button>
            </div>
        </>
    )
}

export default ItemCount