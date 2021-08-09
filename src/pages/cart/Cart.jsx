import { Fragment, useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { Checkout } from "../../components/checkout/Checkout"
import  emptyCart  from '../../img/emptyCart.png'
import '../../index.css'

export const Cart = () => {
    const {cart, removeItem} = useContext(CartContext)
    return(
        <Fragment>
            {cart.length === 0 ?
                (<div className="m-auto w-screen">
                    <img src={emptyCart} alt="Carrito vacio" className="z-0"/>
                    <div className="flex justify-center z-10">
                    <NavLink className=" text-center w-40 h-15 m-5 bg-blue-700 font-semibold hover:bg-blue-800 py-3 text-sm text-white mt-5 uppercase active" to='/'>seguir comprando</NavLink>
                    </div>
                </div>) :
                    (<Fragment>
                                <div className="flex shadow-md my-10 md:flex-wrap">
                                <div className="w-3/4 bg-white px-10 py-10">
                                    <div className="flex justify-between border-b pb-8">
                                        <h1 className="font-semibold text-2xl uppercase">mi carrito</h1>
                                    </div>
                                    <div className="flex mt-10 mb-5">
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">detalle de productos</h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">cantidad</h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">precio</h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">total</h3>
                                    </div>
                                {cart.map((object) =>{
                            return(

                                <div key={object.item.id}className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img className="h-24" src={object.item.pictureURL} alt="producto del carrito"/>
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{object.item.title}</span>
                                        <button className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=> removeItem(object.item.id)}>Eliminar</button>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <span className="text-center w-8">{object.quantity}</span>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">${object.item.price}</span>
                                <span className="text-center w-1/5 font-semibold text-sm">${(object.item.price) * (object.quantity)}</span>
                                </div>
                            )
                            }
                        )}
                        <NavLink className="flex font-semibold text-indigo-600 text-sm mt-10 uppercase" to='/'>Continuar Comprando</NavLink>
                        </div>
                            <Checkout />
                        </div>

                        </Fragment>)
            }
        </Fragment>
    )
}