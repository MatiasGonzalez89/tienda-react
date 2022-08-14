import React, { useContext } from 'react';
import {HiShoppingCart} from 'react-icons/hi'
import { cartContext } from '../../CartContext/CartContext';


const CartWidget = () => {
    
    const {qty} = useContext(cartContext)
    
    return (
    <div style={styles.cartWidget}>
        <HiShoppingCart style={styles.cart} />
        {qty!==0 ? <p style={styles.num}>{qty}</p> : ""}
    </div>
    )
};

export default CartWidget

const styles = {
    cartWidget: {
        display: "flex"
    },

    cart: {
        fontSize: "60px",
        textDecoration: "none",
        listStyleType: "none",
        color:"black"
    },

    num: {
        fontSize: "30px",
        textDecoration: "none",
        listStyleType: "none",
        color:"black"
    }
}