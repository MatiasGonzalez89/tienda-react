import React, { useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/firebase'
import { getDoc, collection, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams();

    useEffect(() => {
        const productCollection = collection(db, 'productos')
        const refDoc = doc(productCollection, `${itemId}`)
        getDoc(refDoc)
        .then(result => {
            const producto = {
                id: result.id,
                ...result.data(),
            }
            setLoading(false)
            setProducto(producto)
        })    
        .catch ((reject) => {
            setProducto(reject)
        })
    },[itemId])

    return (
            <>
                {loading ? <h1 style={{color:"white"}}>Cargando...</h1> : <ItemDetail producto={producto} />}
            </>
        )
    }

export default ItemDetailContainer