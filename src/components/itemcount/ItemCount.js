import React from 'react'
import '../../index.css'
import {useState} from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState (initial)

    const [newStock, setStock] = useState (stock)

    const subtract = ()=>{
          if (quantity > 1){
            setQuantity(quantity - 1)
            setStock(newStock + 1)
          }  
    }

    const add = () => {
        if(newStock !== 0){
            setQuantity(quantity +1)
            setStock(newStock -1)
        }
    }


    return(
        <div className=" bg-gray-50 md:w-48 md:h-22 mx-auto">
            <div className="flex justify-center items-center pt-5">
            <button className="p-2 border-2 border-black rounded-md" onClick={add}>+</button>
            <span className="p-1 ml-5">{quantity}</span>
            <button className="p-2 ml-5 border-2 border-black rounded-md"onClick={subtract}>-</button>
            <button className="p-2 border-2 border-black rounded-md ml-2" onClick={() => onAdd(quantity)} value={quantity}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount