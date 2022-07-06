import React from 'react'
import styles from './Item.module.css'

export const Item = ({producto}) => {
    return (
        <div className={styles.cardShop}>{producto.id}
                <h1>{producto.nombre}</h1>
                <div className={styles.cardImg}>Imagen</div>
                <p>{producto.descripcion}</p>
                <h2>{producto.precio}</h2>
                
        </div>
    )
}

export default Item