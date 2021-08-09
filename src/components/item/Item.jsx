import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../index.css';

export const Item = ({item}) => {
    const {id, title, price, pictureURL} = item
        
    return(
        <NavLink className="bg-white w-96 border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden m-10" to={`/item/${id}`}>
                <img src={pictureURL} alt="imagen de producto" className="w-full h-4/5"/>
                <div className="p-4">
                    <p className="mb-1 text-gray-900 font-semibold text-center">{title}</p>
                    <p className="text-gray-700 text-center my-5">$ {price}</p>
                </div>
        </NavLink>
    )
}