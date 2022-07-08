import React from 'react'
import styles from './Item.module.css'


export const Item = ({producto: {id, title, description, price, imgUrl}}) => {
    return (
        <div className={styles.cardShop} key={id}>
                <h1>{title}</h1>
                <img src={imgUrl} />
                <p>{description}</p>
                <button>Ver detalle</button>
                <h2>${price}</h2>
                
        </div>
    )
}

export default Item