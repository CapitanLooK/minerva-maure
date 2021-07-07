import { useEffect, useState } from 'react';
import '../../index.css';
import { ItemList } from '../itemlist/ItemList'
import { useParams } from 'react-router-dom';
import ITEMS from '../../data/items.json'
import LoaderProducts from '../../img/cargandoProductos.gif'

export const ItemListContainer = () => {
    const {id} = useParams()
    const [items, setItems] = useState([])

    useEffect(() =>{

        const promise = new Promise ((resolve, reject) => {

            setTimeout(() => {
                const getItems = () => {
                    return id ? ITEMS.filter((item) => item.categoryId == id) : ITEMS
                }
                const items = getItems()
                resolve(items)
            }, 2000)
    
        })

        promise.then((resolve) =>{
            setItems(resolve)
        })
    
    }, [id])



    return(
        <>
            {items.length === 0 ? <img src={LoaderProducts} className="bg-black w-screen h-screen"/> : <ItemList items={items}/>}
        </>
    )
}