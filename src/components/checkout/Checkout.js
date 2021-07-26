import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { Form } from '../form/Form';


export const Checkout = () =>{
    const {clear, total, cartWidgetQuantity} = useContext(CartContext)


    return(
        <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8 uppercase">Resumen de compra</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Cantidad de Productos</span>
          <span className="font-semibold text-sm">{cartWidgetQuantity}</span>
        </div>
        <div className="py-10">
          <label className="font-semibold inline-block mb-3 text-sm uppercase">Codigo de Descuento</label>
          <input type="text" placeholder="Ingresa el codigo" className="order border-2 rounded-r px-4 py-2 w-full" disabled/>
        </div>
        <button className="bg-indigo-500 hover:bg-indigo-600 px-3 py-3 text-sm text-white uppercase">Agregar cupon</button>
        <button className="bg-red-500 hover:bg-red-600 px-3 py-3 text-sm text-white uppercase ml-20" onClick={()=> clear()}>limpiar carrito</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <Form/>
          
        </div>
        </div> 
    )
}