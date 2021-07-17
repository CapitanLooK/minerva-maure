
import { createContext, useState } from 'react'

const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) =>{
        if (cart.length > 0) {
            if (isInCart(item.id)) {
                let position = cart.findIndex(object => object.item.id === item.id)
                let newCart = cart
                newCart[position].quantity += quantity
                setCart(newCart)
            }else setCart([...cart, {item, quantity}])
        }else setCart([{item, quantity}])
    }

    const removeItem = (ID) =>{
        setCart(cart.filter(object => object.item.id !== ID))
    }

    const clear = () =>{
        setCart([])
    }
    
    const isInCart = id =>{
        return cart.some((object) => object.item.id === id)
    }

        console.log(cart);

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>)
}

export {CartContext}