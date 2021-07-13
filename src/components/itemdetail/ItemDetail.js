import React from 'react';
import '../../index.css';
import { ItemCount } from '../itemcount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const ItemDetail = ({item}) => {
    const {titulo, precio, pictureURL, descripcion} = item
    const [isClicked, setIsClicked] = useState ()

    const onAdd = counter => {
        setIsClicked(true)
    }

    console.log();


    return(

<div className="mt-6 pl-16 pr-16 ml-auto mr-auto max-w-screen-xl box-content">

<div className="w-28 box-border max-w-full pl-3 m-0 list-none" >
        <img src={pictureURL} alt="producto" />
</div>

<div className="flex box-content static leading-8">
    <div className="block border-box leading-8 static">
        <span>{titulo}</span>
    </div>
    <div className="block border-box leading-8 static">
        <span>{precio}</span>
    </div>
    <div className="block border-box leading-8 static">
        <input type="number" placeholder="Medida 1" />
    </div>
    <div className="block border-box leading-8 static">
    { isClicked ? <Link to={'/cart'}><button className="p-2 border-2 border-black rounded-md ml-2">Terminar Compra</button></Link> : <ItemCount initial={1} stock={9} onAdd={onAdd}/> }
    </div>
    <div className="block border-box leading-8 static">
        <span>{descripcion}</span>
    </div>
    
</div>

</div>
    )
}