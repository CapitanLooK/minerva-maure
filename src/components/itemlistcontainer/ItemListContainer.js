import { useEffect, useState } from 'react';
import '../../index.css';
import { ItemList } from '../itemlist/ItemList'
import { useParams } from 'react-router-dom';
import ITEMS from '../../data/items.json'

export const ItemListContainer = () => {
    const {id} = useParams()
    const [items, setItems] = useState([])

    useEffect(() =>{
        const getItems = () => {
            return id ? ITEMS.filter((item) => item.categoryId === id) : ITEMS
        }

        
        const items = getItems()
        setItems(items)

        const promise = new Promise ((response, reject) => {

            setTimeout(() => {
                response(items)
            }, 2000)
    
        })

        promise.then((response) =>{
            setItems(response)
        })
    
    }, [id])



    return(
        <>
            <div>
            <ItemList items={items}/>
            </div>
        </>
    )
}