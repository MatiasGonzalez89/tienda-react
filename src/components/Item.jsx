import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'


export const Item = ({producto}) => {
    
    return (
        <div className={styles.cardShop} key={producto.id}>
                <h1>{producto.title}</h1>
                <img className={styles.cardImg} src={producto.imgUrl} alt={producto.title} />
                <p>{producto.smDescription}</p>
                <Link key={producto.id} to={`/ItemDetailContainer/ItemDetail/${producto.id}`}><button>Ver detalle</button></Link>
                <h2>${producto.price}</h2>
                
        </div>
    )
}

export default Item