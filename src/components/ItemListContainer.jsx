import React, { useState, useEffect} from 'react'
import productos from "../data/index"
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'
import styles from './ItemListContainer.module.css'

const promesa =new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos)
    }, 2000)

}) 

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        promesa.then((response) => {
            setLoading(false)
            setProductos(response)
        }) .catch ((reject) => {
            setProductos(reject)
        })
    },[])

    return (
            <main className={styles.itemListContainer}>
                <h1 className={styles.greeting}>{greeting}</h1>
                {loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}
                <ItemDetailContainer />
            </main>
        )
    }

export default ItemListContainer