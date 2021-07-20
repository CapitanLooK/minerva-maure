import '../../index.css';
import { ItemCount } from '../itemcount/ItemCount'
import { NavLink } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {
    
    const [isClicked, setIsClicked] = useState (false)
    const  {addItem}  = useContext(CartContext)
    
    const onAdd = (quantity) => {
        setIsClicked(true)
        addItem(item, quantity)
    }


    const {title, price, pictureURL, description} = item
    return(

<div className="mt-6 pl-16 pr-16 ml-auto mr-auto max-w-screen-xl box-content">

<div className="w-28 box-border max-w-full pl-3 m-0 list-none" >
        <img src={pictureURL} alt={`nombre de producto ${title}`} />
</div>

<div className="flex box-content static leading-8">
    <div className="block border-box leading-8 static">
        <span>{title}</span>
    </div>
    <div className="block border-box leading-8 static">
        <span>{price}</span>
    </div>
    <div className="block border-box leading-8 static">
    { isClicked ? <NavLink className="p-2 border-2 border-black rounded-md ml-2" to={'/cart'}>Terminar Compra</NavLink> : <ItemCount initial={1} stock={9} onAdd={onAdd}/> }
    </div>
    <div className="block border-box leading-8 static">
        <span>{description}</span>
    </div>
    
</div>

</div>
    )
}