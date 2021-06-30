import { useEffect, useState } from 'react';
import '../../index.css';
import { ItemDetail } from '../itemdetail/ItemDetail'

export const ItemDetailContainer = (props) => {

    const [detail, setDetail] = useState([])
    const product = [
        {
            id: 1,
            titulo: 'Arnes 1',
            precio: 550,
            descripcion: 'Descricion del producto',
            pictureURL: 'https://i.ibb.co/y6s06DR/Screenshot-20210622-214105.jpg'
        },
    ]

    useEffect(() =>{
        const promise = new Promise ((response, reject) => {

            setTimeout(() => {
                response(product)
            }, 2000)
    
        })

        promise.then((response) =>{
            setDetail(response)
        })
    
    })



    return(
        <>
            <div>
                <ItemDetail item={detail}/>
            </div>
        </>
    )
}

export default ItemDetailContainer