import React from 'react';
import '../../index.css';
import {ItemCount} from '../itemcount/ItemCount'
import {Link} from 'react-router-dom'

export const ItemDetail = ({item}) => {
    const {id, titulo, precio, pictureURL, descripcion} = item
    return(

        <Link to={`item/${id}`}>
<div className="flex flex-wrap overflow-hidden">

<div className="w-1/2 overflow-hidden">
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
        <input type="number" placeholder="Medida 2" />
        <input type="number" placeholder="Medida 3" />
        <input type="number" placeholder="Medida 4" />
        <input type="number" placeholder="Medida 5" />
    </div>
    <div className="block border-box leading-8 static">
    <ItemCount initial={1} stock={9} onAdd={() => {console.log('Items agregados al carrito')}}/>
    </div>
    <div className="block border-box leading-8 static">
        <span>{descripcion}</span>
    </div>
</div>

</div>
        </Link>
    )
}