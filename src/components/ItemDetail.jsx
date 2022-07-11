import React from 'react'
import styles from './ItemDetail.module.css'




export const ItemDetail = ({ producto: { id, title, lgDescription, price, imgUrl } }) => {
    return (
        <div className={styles.itemDetailContainer} key={id} >
            <div>
                <img className={styles.itemDetailImg} src={imgUrl} alt={title} />
            </div>
            <div className={styles.detailContainer}>
                <h1>{title}</h1>
                <p>{lgDescription}</p>
                <h2>${price}</h2>
                <button>Finalizar compra</button>
            </div>

        </div>
    )
}

export default ItemDetail

