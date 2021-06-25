import React from 'react';
import '../../index.css';
import { Item } from '../item/Item'

export const ItemList = () => {
    return(
    <div>
        <div className="flex flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                <Item />
            </div>

            <div className="w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                <Item />
            </div>

            <div className="w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                <Item />
            </div>

            <div className="w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                <Item />
            </div>
        </div>
    </div>
    )
}

export default ItemList