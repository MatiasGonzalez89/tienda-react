import React, { useContext } from 'react';
import {HiShoppingCart} from 'react-icons/hi'
import { cartContext } from '../CartContext/CartContext';


const CartWidget = () => {
    
    const {qty} = useContext(cartContext)
    
    return (
    <div>
        <HiShoppingCart style={styles.cart} />
        {qty!==0 ? <p>{qty}</p> : ""}
    </div>
    )
};

export default CartWidget

const styles = {
    cart: {
        fontSize: "60px",
        textDecoration: "none",
        listStyleType: "none"
    }
}