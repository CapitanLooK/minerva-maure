import React from 'react';
import '../../index.css';
import { Item } from '../item/Item'

export const ItemList = ({items}) => {
    return(
            <div className="flex-1 flex-wrap flex-row">
                {items.map((item) => (
                    <Item key={item.id} item={item}/>
                ))}
            </div>
    )
}