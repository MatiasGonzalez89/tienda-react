import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import styles from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

/*const promesa =new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos)
    }, 2000)

}) */

const ItemListContainer = ({ greeting }) => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryName } = useParams()

    useEffect(() => {
        const productCollection = collection(db, 'productos')
        const q = query(productCollection, where('category', '==', `${categoryName}`))
        getDocs(categoryName ? q : productCollection)
            .then(result => {
                const lista = result.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setLoading(false)
                setProductos(lista)
            })
            .catch((reject) => {
                setProductos(reject)
            })

    }, [categoryName])

    // setLoading(true) 
    // promesa.then((data) => {
    //     setLoading(false)
    //     setProductos(data)
    // })
    // })


    return (
        <main className={styles.itemListContainer}>
            <h1 className={styles.greeting}>{greeting}</h1>
            {loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}
        </main>
    )
}

export default ItemListContainer