
import { Fragment } from 'react';
import { Item } from '../item/Item'
import '../../index.css';

export const ItemList = ({items}) => {
    return(
            <Fragment>
                {items.map(item => (
                    <Item key={item.id} item={item}/>
                ))}
            </Fragment>
    )
}