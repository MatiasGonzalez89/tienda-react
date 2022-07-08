import React, { useState, useEffect} from 'react'
import productos from '../data';
import ItemDetail from './ItemDetail';



const getItem =new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos)
    }, 2000)

}) 

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        getItem.then((response) => {
            setLoading(false)
            setProducto(response)
        }) .catch ((reject) => {
            setProducto(reject)
        })
    },[])

    return (
            <>
                {loading ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}
            </>
        )
    }

export default ItemDetailContainer