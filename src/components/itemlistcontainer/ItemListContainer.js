import { Fragment, useEffect, useState } from 'react';
import '../../index.css';
import { ItemList } from '../itemlist/ItemList'
import { useParams } from 'react-router-dom';
import ITEMS from '../../data/items.json'
import LoaderProducts from '../../img/cargandoProductos.gif'
import NoItems from '../../img/noDisponible.png'
import { dataBase } from '../../firebase/firebase';

export const ItemListContainer = () => {
    const {id} = useParams()
    const [items, setItems] = useState([])
    const [isLoading, setIsloading] = useState(false)

    useEffect(() =>{
        setIsloading(true)
        const promise = new Promise ((resolve, reject) => {

            setTimeout(() => {
                const getItems = () => {
                    return id ? ITEMS.filter((item) => item.categoryId === id) : ITEMS
                }
                const items = getItems()
                setIsloading(false)
                resolve(items)
            }, 2000)
    
        })

        promise.then((resolve) =>{
            setItems(resolve)
        })
    
    }, [id])



    return(
        <Fragment>
            { isLoading ? <img src={LoaderProducts} className="bg-black w-screen h-screen"/> : items.length === 0 ? <img src={NoItems} className="bg-black w-screen h-screen"/> : <ItemList items={items}/>}
        </Fragment>
    )
}