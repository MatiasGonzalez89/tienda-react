import React, { createContext, useEffect, useState } from 'react'

export const cartContext  = createContext()
const {Provider} = cartContext
const CustomProvider = ({children}) => {

    const [productsInCart, setProductsInCart] = useState([])
    let [qty, setQty] = useState (0)

    useEffect(() => {
        getQuantity()

    }, [productsInCart])

    const getQuantity = () => {
        let count = 0
        productsInCart.forEach(elem => {
            count += elem.qty
        })
        setQty(count)
    }
    
    const addItem = (product) => {
        if (isInCart(product.id)) {
            const index = productsInCart.findIndex(elem => elem.id === product.id)
            const copia = [...productsInCart]
            copia[index].qty += product.qty
            setProductsInCart(copia)
           
        }else{
            setProductsInCart([...productsInCart, product])
            
        }
    } 

    const removeItem = (id) => {  
        setProductsInCart(productsInCart.filter(elem => elem.id !== id)) 
    }

    const clear = () => {
        setProductsInCart([])
    }

    const isInCart = (id) => {
        return productsInCart.some(elem => elem.id === id)
    }

    return (
        <Provider value={{productsInCart, addItem, removeItem, clear, qty}}>
            {children}
        </Provider>
    )
}

export default CustomProvider