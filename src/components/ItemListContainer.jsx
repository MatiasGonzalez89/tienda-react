import React, { useState, useEffect} from 'react'
import productos from "../data/index"
import ItemList from './ItemList'
import styles from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom'

const promesa =new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos)
    }, 2000)

}) 

const ItemListContainer = ({greeting}) => {

    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryName} = useParams()

    const url = categoryName ? productos.filter(producto => producto.category === categoryName): productos

    useEffect(() => {

        setLoading(true)
        promesa.then((data) => {
            setLoading(false)
            setProductos(data)
        }).catch ((reject) => {
            setProductos(reject)
        })
    },[categoryName])

    return (
            <main className={styles.itemListContainer}>
                <h1 className={styles.greeting}>{greeting}</h1>
                {loading ? <h1>Cargando...</h1> : <ItemList productos={url} />}
            </main>
        )
    }

export default ItemListContainer