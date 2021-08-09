import { useContext, useState, useEffect } from "react"
import { CartContext } from '../../context/CartContext'
import { dataBase } from '../../firebase/firebase'
import firebase from 'firebase/app'
import '@firebase/firestore'
import swal from 'sweetalert'



export const Checkout = () => {
  const { clear, total, cartWidgetQuantity, cart } = useContext(CartContext)
  const db = dataBase
  const [isDisabled, setIsDisabled] = useState(true)
  const [buyerData, setbuyerData] = useState(
    {
      name: '',
      phone: '',
      email: '',
      checkEmail: ''
    }
  )

  useEffect(() => {

    const disabledButton = [buyerData.name, buyerData.phone, buyerData.email, buyerData.checkEmail].includes('')
    setIsDisabled(disabledButton)
  }, [buyerData])

  const handleInputChange = event => setbuyerData({ ...buyerData, [event.target.name]: event.target.value })

  const handleSubmit = (event) => event.preventDefault()

  const getOrder = () => {

    const order = cart.map(
      ({ item, quantity }) => ({ id: item.id, title: item.title, price: item.price, quantity: quantity })
    )
    return {
      buyer: buyerData,
      items: order,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total
    }
  }

  const purchase = buyer => {
    const regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    const firstEmail = buyerData.email
    const validateEmail = buyerData.checkEmail
    const isEmail = regexEmail.test(firstEmail)
    const isMatch = firstEmail === validateEmail
    if (!isEmail) {
      swal('Ingrese una cuenta de mail valida');
    } else if (!isMatch) {
      swal('Los campos Email y Confirmar Email no coinciden')
    } else {

      swal({
        title: "Esta seguro que va a hacer la compra?",
        text: "Una vez confirmado, se creara el pedido",
        icon: "warning",
        buttons: {
          confirmar: 'CONFIRMAR',
          cancel: 'CANCELAR'
        }
      })
        .then((orderConfirm) => {
          if (orderConfirm) {
            const newOrder = getOrder(buyer)
            const orders = db.collection('orders')
            orders.add(newOrder).then(({ id }) => {
              swal("Gracias por tu compra!", `Tu numero de pedido es el ${id}. Pronto nos comunicaremos para coordinar el envio`, "success")
            }).catch((error) => {
              console.log('error', error);
            }).finally(() => clear())
          } else {
            swal("Su pedido ah sido cancelado");
          }
        });
    }


  }




  return (
    <div className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8 uppercase">resumen de compra</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">cantidad de productos</span>
        <span className="font-semibold text-sm">{cartWidgetQuantity}</span>
      </div>
      <div className="py-10">
        <label className="font-semibold inline-block mb-3 text-sm uppercase">codigo de descuento</label>
        <input type="text" placeholder="Ingresa el codigo" className="order border-2 rounded-r px-4 py-2 w-full" disabled />
      </div>
      <button className="bg-indigo-500 hover:bg-indigo-600 px-3 py-3 text-sm text-white uppercase">agregar cupon</button>
      <button className="bg-red-500 hover:bg-red-600 px-3 py-3 text-sm text-white uppercase ml-20" onClick={() => clear()}>limpiar carrito</button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <h2 className="font-semibold text-sm uppercase pb-2 text-center">datos del comprador</h2>
        <form onSubmit={handleSubmit}>
          <label className="font-medium inline-block mb-3 text-sm uppercase">nombre</label>
          <input type="text" name="name" value={buyerData.name} className="order border-2 rounded-r px-4 py-2 w-full" placeholder="Ingresar Nombre" onChange={handleInputChange} required />
          <label className="font-medium inline-block my-3 text-sm uppercase">telefono</label>
          <input type="phone" name="phone" value={buyerData.phone} className="order border-2 rounded-r px-4 py-2 w-full" placeholder="Ingresar Telefono" onChange={handleInputChange} required />
          <label className="font-medium inline-block my-3 text-sm uppercase">email</label>
          <input type="email" name="email" value={buyerData.email} className="order border-2 rounded-r px-4 py-2 w-full" placeholder="Ingresar Email" onChange={handleInputChange} required />
          <label className="font-medium inline-block my-3 text-sm uppercase">confirmar email</label>
          <input type="email" name="checkEmail" value={buyerData.checkEmail} className="order border-2 rounded-r px-4 py-2 mt- 4 w-full" placeholder="Repetir Email" onChange={handleInputChange} required />
        </form>
        {isDisabled ? <button className="bg-gray-700 font-semibold hover:bg-gray-800 py-3 text-sm text-white uppercase w-full mt-5">finalizar Compra</button> : <button className="bg-blue-700 font-semibold hover:bg-blue-800 py-3 text-sm text-white uppercase w-full mt-5" onClick={() => purchase()}>finalizar Compra</button>}

      </div>
    </div>
  )
}