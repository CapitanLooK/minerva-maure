import React from 'react';
import '../../index.css';
import cart from '../../svg/shopping-cart.svg'

export const CartWidget = () => {
    return(
        <div>
            <button><img className="h-6 w-6" src={cart} alt="" /></button>
        </div>
    )
}

export default CartWidget