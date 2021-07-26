import { Fragment, useContext } from "react"
import { CartContext } from "../../context/CartContext";

export const Form = () => {
    const {onNameChange, onPhoneChange, onEmailChange, purchase} = useContext(CartContext)
    const handleSubmit = (event) => event.preventDefault()

    return(
        <Fragment>
              <h2 className="font-semibold text-sm uppercase pb-2 text-center">Datos del comprador</h2>
              <form onSubmit={handleSubmit}>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Nombre</label>
              <input type="text" name="name"  className="order border-2 rounded-r px-4 py-2 w-full" placeholder="ingresar nombre" onChange={event => onNameChange(event)} required/>
              <label className="font-medium inline-block my-3 text-sm uppercase">Telefono</label>
              <input type="phone" name="phone" className="order border-2 rounded-r px-4 py-2 w-full" placeholder="ingresar telefono" onChange={event => onPhoneChange(event)} required/>
              <label className="font-medium inline-block my-3 text-sm uppercase">Email</label>
              <input type="email" name="email" className="order border-2 rounded-r px-4 py-2 w-full" placeholder="ingresar email" onChange={event => onEmailChange(event)} required/>
              </form>
              <button className="bg-blue-700 font-semibold hover:bg-blue-800 py-3 text-sm text-white uppercase w-full mt-5" onClick={() =>purchase()}>Finalizar Compra</button>
        </Fragment>
    )
}