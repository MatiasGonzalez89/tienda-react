import React from 'react'
import styles from '../../Styles/Item.module.css'
import { Link } from 'react-router-dom'


export const Item = ({ producto }) => {
    
    return (
        <div className={styles.cardShop} key={producto.id}>
                <img className={styles.cardImg} src={producto.imgUrl} alt={producto.title} />
                <p className={styles.title}>{producto.title}</p>
                <Link key={producto.id} to={`/ItemDetailContainer/ItemDetail/${producto.id}`}>
                    <button className={styles.cardShopBtn}>Ver detalle</button>
                </Link>
                <h2>${producto.price}</h2>
                
        </div>
    )
}

export default Item