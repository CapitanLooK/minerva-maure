import { useState } from 'react'
import '../../index.css'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState (initial)

    const [newStock, setStock] = useState (stock)

    const subtract = ()=>{
          if (counter > 1){
            setCounter(counter - 1)
            setStock(newStock + 1)
          }  
    }

    const add = () => {
        if(newStock !== 0){
            setCounter(counter +1)
            setStock(newStock -1)
        }
    }


    return(
        <div>
            <div className="flex">
                <button className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-6 py-3" onClick={add}>+</button>
                <p className="px-2 mx-5 mt-3 text-l">{counter}</p>
                <button className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-6 py-3"onClick={subtract}>-</button>
            </div>
            <button className=" bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase mt-5 px-12 py-3" onClick={() => onAdd(counter)} disabled={stock === 0}>Agregar</button>
        </div>
    )
}