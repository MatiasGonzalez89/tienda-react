import React from 'react'
import Item from './Item'
import styles from './ItemList.module.css'

const ItemList = ({ productos }) => {
  return (
    <div className={styles.main}>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}  
    </div>
  )
}

export default ItemList
