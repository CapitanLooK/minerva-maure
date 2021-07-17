import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../../index.css';
import { ItemDetail } from '../itemdetail/ItemDetail'
import ITEM from '../../data/items.json'
import LoaderProduct from '../../img/cargandoProducto.gif'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState([])

    useEffect(() =>{

        const promise = new Promise ((resolve, reject) => {

            setTimeout(() => {
                const getItem = () => {
                    return id ? ITEM.find((product) => product.id == id) : ITEM
                }
                const item = getItem()
                resolve(item)
            }, 2000)
    
        })

        promise.then((resolve) =>{
            setItem(resolve)
        })
    
    }, [id])



    return(
        <>
                {item.length === 0 ? <img src={LoaderProduct} alt="cargando" className="bg-black w-screen h-screen"/> : <ItemDetail key={id} item={item}/>}
        </>
    )
}