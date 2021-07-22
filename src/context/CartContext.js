import { createContext, useEffect, useState } from 'react'

const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartWidgetQuantity, setCartWidgetQuantity] = useState(0)
    const [total, setTotal] = useState(0)

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
        }
    }

    const removeItem = (ID) =>{
        setCart(cart.filter(object => object.item.id !== ID))
    }

    console.log(cartWidgetQuantity);

    const clear = () =>{
        setCart([])
        setCartWidgetQuantity(0)
    }
    
    const isInCart = id =>{
        return cart.some((object) => object.item.id === id)
    }

    const widgetItems = (cart) =>{
        let totalItems = 0
        if(cart.length > 0){
            cart.forEach((item) => totalItems += item.quantity)
        }
        setCartWidgetQuantity(totalItems)
    }
    useEffect(
        ()=>{
            const nextTotal = cart.map(({item, quantity}) => item.price * quantity).reduce(
                (cartTotal, currentItemTotal) => cartTotal + currentItemTotal, 0
            )
            setTotal(nextTotal)
            widgetItems(cart)
        }, [cart]
    )
    
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartWidgetQuantity, total}}>
            {children}
        </CartContext.Provider>)
}

export {CartContext}