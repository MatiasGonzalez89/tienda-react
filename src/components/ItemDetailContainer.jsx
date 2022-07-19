import React, { useState, useEffect} from 'react'
import productos from '../data/index';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const getItem =new Promise ((res, rej) => {
    setTimeout(() => {
        res(productos)
    }, 2000)
}) 


const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams();

    useEffect(() => {

        setLoading(true)
        getItem.then((data) => {
            setLoading(false)
            setProducto(data[itemId])
        }).catch ((reject) => {
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