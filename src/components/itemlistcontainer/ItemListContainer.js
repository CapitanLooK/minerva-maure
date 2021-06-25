import React from 'react';
import '../../index.css';
import { ItemCount } from '../itemcount/ItemCount';
import { ItemList } from '../itemlist/ItemList'
export const ItemListContainer = (props) => {

    

    return(
        <div>
            <div>
                <ItemList />
            </div>
            <div>
                <h2 className="text-center mt-5">{props.greeting} la lista esta vacia</h2>
                <ItemCount initial={1} stock={15} onAdd/>
            </div>
        </div>
    )
}

export default ItemListContainer