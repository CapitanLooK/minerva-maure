import { ItemCount } from '../itemcount/ItemCount'
import { NavLink } from 'react-router-dom'
import { Fragment, useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import okStock from '../../img/inStock.png'
import outOfStock from '../../img/outOfStock.png'
import '../../index.css';

export const ItemDetail = ({ item }) => {
  const { title, price, pictureURL, description, stock } = item
  const [isClicked, setIsClicked] = useState(false)
  const { addItem } = useContext(CartContext)

  const onAdd = (quantity) => {
    setIsClicked(true)
    addItem(item, quantity)
  }

  return (
    <Fragment>
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col md:flex-row gap-11 py-20 px-10 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl">
          <div className="text-indigo-500 flex flex-col justify-between">
            <img src={pictureURL} alt="Foto del producto" />
          </div>
          <div className="text-indigo-500 ">
            <h3 className="uppercase text-black text-2xl font-medium">{title}</h3>
            <h3 className="text-2xl text-black mb-7">${price}</h3>
            <p className="text-black">Stock: {stock > 0 ? <img src={okStock} className="h-5 w-5 inline mb-1" alt="en stock" /> : <img src={outOfStock} className="h-5 w-5 inline mb-1" alt="sin stock" />}</p>
            <div className="flex gap-0.5 mt-4">
              {isClicked ? <NavLink className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3" to={'/cart'}>Terminar Compra</NavLink> : <ItemCount initial={1} stock={stock} onAdd={onAdd} />}
            </div>
            <p className="text-black text-left mt-10">{description}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}