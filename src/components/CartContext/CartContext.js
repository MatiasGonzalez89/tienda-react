import React, { createContext, useState } from 'react'

export const cartContext  = createContext()
const {Provider} = cartContext
const CustomProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    const addItem = (item) => {
        setProductos(item)  
    } 

    const removeItem = (item) => {
        productos.splice(item.id, 1)
    }

    const clear = () => {
        setProductos([])
    }

    const isInCart = (itemId) => {
        productos.find = (elem => elem.id === itemId)
    }

    return (
        <Provider value={{productos, addItem, removeItem, clear}}>
            {children}
        </Provider>
    )
}

export default CustomProvider