import { useEffect, useState } from 'react';
import '../../index.css';
import { ItemCount } from '../itemcount/ItemCount';
import { ItemList } from '../itemlist/ItemList'
export const ItemListContainer = (props) => {

    const [catalog, setCatalog] = useState([])
    const products = [
        {
            id: 1,
            titulo: 'Arnes 1',
            precio: 550,
            descripcion: 'Descricion del producto',
            pictureURL: 'https://i.ibb.co/y6s06DR/Screenshot-20210622-214105.jpg'
        },
        {
            id: 2,
            titulo: 'Arnes 2',
            precio: 500,
            descripcion: 'Descricion del producto 2',
            pictureURL: 'https://i.ibb.co/QNzZFG1/In-Shot-20200831-000149352.jpg'
            },
        {
            id: 3,
            titulo: 'Arnes 3',
            precio: 300,
            descripcion: 'Descricion del producto 3',
            pictureURL: 'https://i.ibb.co/QNzZFG1/In-Shot-20200831-000149352.jpg'
        },

    ]
    useEffect(() =>{
        const promise = new Promise ((response, reject) => {

            setTimeout(() => {
                response(products)
            }, 2000)
    
        })

        promise.then((response) =>{
            console.log(response)
            setCatalog(response)
        })
    
    }, [])



    return(
        <>
            <div>
                <ItemList items={catalog}/>
            </div>
            <div>
                <h2 className="text-center mt-5">{props.greeting} la lista esta vacia</h2>
                <ItemCount initial={1} stock={9} onAdd={() => {console.log('Items agregados al carrito')}}/>
            </div>
        </>
    )
}

export default ItemListContainer