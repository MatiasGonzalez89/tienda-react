import React from 'react'
import styles from './Item.module.css'


export const Item = ({producto}) => {
    return (
        <div className={styles.cardShop} key={producto.id}>
                <h1>{producto.nombre}</h1>
                <img className={styles.cardImg}></img>
                <p>{producto.descripcion}</p>
                <button>Ver detalle</button>
                <h2>${producto.precio}</h2>
                
        </div>
    )
}

export default Item