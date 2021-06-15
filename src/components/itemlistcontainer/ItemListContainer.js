import React from 'react';
import '../../index.css';

export const ItemListContainer = (props) => {

    

    return(
        <div>
            <h2 className="text-center mt-5">{props.greeting} la lista esta vacia</h2>
        </div>
    )
}

export default ItemListContainer