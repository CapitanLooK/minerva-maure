import { Fragment, useContext } from 'react';
import '../../index.css';
import cart from '../../svg/shopping-cart.svg'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



export const CartWidget = () => {
    const { cartWidgetQuantity } = useContext(CartContext)
    return(
        <Fragment>
            <NavLink to='/cart'><img className="h-6 w-6 p-0" src={cart} alt="boton carrito" /><span className={cartWidgetQuantity === 0 ? 'hidden' : 'text-white absolute pl-7 mb-6'}>({cartWidgetQuantity})</span></NavLink>
        </Fragment>
    )
}