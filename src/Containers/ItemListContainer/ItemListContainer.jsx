import React, { useState, useEffect } from 'react'
import ItemList from '../ItemListContainer/ItemList'
import styles from '../../Styles/ItemListContainer.module.css'
import { useParams } from 'react-router-dom'
import { db } from '../../Firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import ClockLoader from "react-spinners/ClipLoader"

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

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


    return (
        <div className={styles.itemListContainer}>
            <h1 className={styles.greeting}>{greeting}</h1>
            {loading  
                ? <div className={styles.spinner}>
                    <ClockLoader color="#fbe725" size="150px" />
                </div>

                : <div className={styles.container}>
                    <ItemList productos={productos} />
                </div>}
        </div>
    )
}

export default ItemListContainer