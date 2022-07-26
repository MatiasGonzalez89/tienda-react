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
        return(qty)
    }
    
    const addItem = (product) => {
        if (isInCart(product.id)) {
            const index = productsInCart.findIndex(elem => elem.id === product.id)
            const copia = [...productsInCart]
            copia[index].qty += product.qty
            setProductsInCart(copia)
            setQty(qty += product.qty)
        }else{
            setProductsInCart([...productsInCart, product])
            setQty(qty += product.qty)
        }
    } 

    const removeItem = (id) => {
        setProductsInCart(productsInCart.filter(elem => elem.id === !id))
        let count = 0
        productsInCart.forEach(elem => {
            count += elem.quantity
        })
        setQty(count)
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