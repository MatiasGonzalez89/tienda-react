import React from 'react'
import ItemCount from './ItemCount'
import styles from './ItemListContainer.module.css'


const ItemListContainer = ({ greeting }) => {
    const onAdd = () => {
        alert(`Gracias por tu compra.`)  
    }

    return (
        <>
            <h1 className={styles.greeting}>{greeting}</h1>

            <ItemCount stock={5} initial={1} onAdd={onAdd} />

        </>
    )
}

export default ItemListContainer