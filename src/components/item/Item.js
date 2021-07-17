import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    const {id, title, price, pictureURL, description} = item
        
    return(

        <Link to={`/item/${id}`}>
<div className="w-full h-screen flex justify-center items-center" id={id}>
   <div>
        <div className="w-96">  
            <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                <img className="w-full transition duration-700 ease-in-out group-hover:opacity-60" src={pictureURL} alt="product" />
            </div>
            <div className="px-4 py-3 bg-white text-center">
                <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">{title}</h1>
                <div className="flex py-2 justify-center">
                    <p className="mr-2 text-xs text-gray-600">${price}</p>
                </div>
                <div className="flex justify-center mt-2">
                    <div className="ml-2">
                        <button className="">{description}</button>
                    </div>
                </div>
            </div>
            </div>
       </div>
   </div>
</div>
        </Link>
    )
}

export default Item