import { createContext, useState, useEffect } from 'react'
import { dataBase } from '../firebase/firebase.js'
import firebase from 'firebase/app'
import '@firebase/firestore'
import swal from 'sweetalert'


const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartWidgetQuantity, setCartWidgetQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const [orderId, setorderId] = useState('')
    const [buyerName, setBuyerName] = useState('')
    const [buyerPhone, setBuyerPhone] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    const db = dataBase
    
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

    const onNameChange = (event) =>{
        setBuyerName(event.target.value)
    }

    const onPhoneChange = (event) =>{
        setBuyerPhone(event.target.value)
    }

    const onEmailChange = (event) =>{
        setBuyerEmail(event.target.value)
    }

    const getOrder = () =>{
        const order = cart.map(
            ({item, quantity}) =>({id: item.id, title: item.title, price: item.price, quantity: quantity})
        )
        return {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: order,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        }
    }

    const purchase = buyer =>{
        const newOrder = getOrder(buyer)
        const orders = db.collection('orders')
        orders.add(newOrder).then(({id}) => {
            setorderId(id)
            swal("Gracias por tu compra!", `Tu numero de pedido es el ${id}. Pronto nos comunicaremos para coordinar el envio`, "success")
        }).catch((error) =>{
            console.log('error', error);
        }).finally(() => clear())
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
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartWidgetQuantity, total, orderId, purchase, onNameChange, onPhoneChange, onEmailChange}}>
            {children}
        </CartContext.Provider>)
}

export {CartContext}