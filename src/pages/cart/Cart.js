import { Fragment, useContext } from "react"
import '../../index.css'
import { CartContext } from '../../context/CartContext'
import  emptyCart  from '../../img/emptyCart.png'
import { NavLink } from "react-router-dom"
import { object } from "prop-types"

export const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext)
    console.log(cart);
    return(
        <Fragment>
            {
                cart.length === 0 ?
                (
                   <Fragment>
                        <img src={emptyCart} alt="Carrito vacio" />
                        <NavLink to='/'>SEGUIR COMPRANDO</NavLink>
                    </Fragment>) :
                    (<Fragment>
                                <div className="flex shadow-md my-10">
                                <div className="w-3/4 bg-white px-10 py-10">
                                    <div className="flex justify-between border-b pb-8">
                                        <h1 className="font-semibold text-2xl">Mi Carrito</h1>
                                        <h2 className="font-semibold text-2xl">1</h2>
                                    </div>
                                    <div className="flex mt-10 mb-5">
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalle de productos</h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                                    </div>
                                {cart.map((object) =>{
                            return(

                                <div key={cart}className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img className="h-24" src={object.item.pictureURL} alt="producto del carrito"/>
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{object.item.title}</span>
                                        <button className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=> removeItem(object.item)}>Eliminar</button>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <span className="text-center w-8">{object.quantity}</span>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">${object.item.price}</span>
                                <span className="text-center w-1/5 font-semibold text-sm">${(object.item.price) *(object.quantity)}</span>
                            </div>
                                    
                          
                            )
                            }
                        )}
                        <NavLink className="flex font-semibold text-indigo-600 text-sm mt-10" to='/'>Continuar Comprando</NavLink>
                        </div>
        
                        <div id="summary" className="w-1/4 px-8 py-10">
                          <h1 className="font-semibold text-2xl border-b pb-8">Resumen de compra</h1>
                          <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">{object.quantity} Productos</span>
                            <span className="font-semibold text-sm">590$</span>
                          </div>
                          <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Metodo de Envio</label>
                            <select className="block p-2 text-gray-600 w-full text-sm" disabled>
                                <option>Seleccionar</option>
                              <option>Envio Correo Argentino</option>
                              <option>Moto Mensajeria</option>
                            </select>
                          </div>
                          <div className="py-10">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase">Codigo de Descuento</label>
                            <input type="text" id="promo" placeholder="Ingresa el codigo" className="p-2 text-sm w-full" disabled/>
                          </div>
                          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Agregar</button>
                          <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                              <span>Total</span>
                              <span>$600</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Finalizar Compra</button>
                          </div>
                        </div> 
                        </div>

                        </Fragment>)
            }
        </Fragment>
    )
}