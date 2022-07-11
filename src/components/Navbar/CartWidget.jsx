import React from 'react';
import {HiShoppingCart} from 'react-icons/hi'


const CartWidget = () => {
    return (
    <div>
        <HiShoppingCart style={styles.cart} />
    </div>
    )
};

export default CartWidget

const styles = {
    cart: {
        fontSize: "60px"
    }
}