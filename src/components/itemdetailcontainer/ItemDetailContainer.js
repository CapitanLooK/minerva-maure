import { useEffect, useState, useParams } from 'react';
import '../../index.css';
import { ItemDetail } from '../itemdetail/ItemDetail'
import ITEM from '../../data/items.json'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState([])

    useEffect(() =>{

    const getItem = () => {
        return id ? ITEM.filter((item) => item.id === id) : ITEM
    }

        const item = getItem()
        setItem(item)

        const promise = new Promise ((response, reject) => {

            setTimeout(() => {
                response(item)
            }, 2000)
    
        })

        promise.then((response) =>{
            setItem(response)
        })
    
    }, [id])



    return(
        <>
            <div>
                <ItemDetail key={id} item={item}/>
            </div>
        </>
    )
}