
import { createContext, useState } from 'react'

const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartWidgetQuantity, setCartWidgetQuantity] = useState(0)

    const addItem = (item, quantity) =>{
        if (cart.length > 0) {
            if (isInCart(item.id)) {
                let position = cart.findIndex(object => object.item.id === item.id)
                let newCart = cart
                newCart[position].quantity += quantity
                setCart(newCart)
                setCartWidgetQuantity(cartWidgetQuantity + quantity)
            }else setCart([...cart, {item, quantity}])
        }else {
            setCart([{item, quantity}])
            setCartWidgetQuantity(cartWidgetQuantity + quantity)
        }
    }

    const removeItem = (ID, quantity) =>{
        setCart(cart.filter(object => object.item.id !== ID))
        setCartWidgetQuantity(cartWidgetQuantity - quantity)
    }

    console.log(cartWidgetQuantity);

    const clear = () =>{
        setCart([])
        setCartWidgetQuantity(0)
    }
    
    const isInCart = id =>{
        return cart.some((object) => object.item.id === id)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartWidgetQuantity}}>
            {children}
        </CartContext.Provider>)
}

export {CartContext}