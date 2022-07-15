import React from 'react'
import styles from './ItemDetail.module.css'




export const ItemDetail = ({ producto }) => {
    return (
        <div className={styles.itemDetailContainer} key={producto.id} >
            <div>
                <img className={styles.itemDetailImg} src={producto.imgUrl} alt={producto.title} />
            </div>
            <div className={styles.detailContainer}>
                <h1>{producto.title}</h1>
                <p>{producto.lgDescription}</p>
                <h2>${producto.price}</h2>
                <button>Finalizar compra</button>
            </div>

        </div>
    )
}

export default ItemDetail

