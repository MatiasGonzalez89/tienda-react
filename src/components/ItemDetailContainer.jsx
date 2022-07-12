import React, { useState, useEffect} from 'react'
import productos from '../data/index';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const getItem =new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos[0])
    }, 2000)
}) 

const ItemDetailContainer = () => {

    const {itemId} = useParams()
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {

        const item = productos.find(producto => producto.id === {itemId})

        setLoading(true)
        getItem.then((item) => {
            setLoading(false)
            setProducto(item)
        }) .catch ((reject) => {
            setProducto(reject)
        })
    },[itemId])

    return (
            <>
                {loading ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}
            </>
        )
    }

export default ItemDetailContainer