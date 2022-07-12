import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'


export const Item = ({producto: {id, title, smDescription, price, imgUrl}}) => {
    
    return (
        <div className={styles.cardShop} key={id}>
                <h1>{title}</h1>
                <img className={styles.cardImg} src={imgUrl} />
                <p>{smDescription}</p>
                <Link key={id} to={`./ItemDetailContainer/ItemDetail/${id}`}><button>Ver detalle</button></Link>
                <h2>${price}</h2>
                
        </div>
    )
}

export default Item