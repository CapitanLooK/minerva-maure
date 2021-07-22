import { Fragment, useEffect, useState } from 'react';
import {
    useParams
} from 'react-router';
import '../../index.css';
import {
    ItemList
} from '../../components/itemlist/ItemList'
import LoaderProducts from '../../img/cargandoProductos.gif'
import {
    dataBase
} from '../../firebase/firebase';

export const ItemListContainer = () => {
    const {categoryId} = useParams()
    const [items, setItems] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        const db = dataBase
        const productsCollection = db.collection('products')
        let itemCategory
        categoryId ? itemCategory = productsCollection.where('category', '==', categoryId) : itemCategory = productsCollection
            itemCategory.get().then(querySnapshot => {
                    setItems(querySnapshot.docs.map(doc => ({id: doc.id,...doc.data()
                    })))
                })
                .catch((error) => {
                    console.log('error al buscar productos', error);
                })
                .finally(() => setIsloading(false))

            
            
    }, [categoryId])


    return ( <Fragment> {
            isLoading ? < img src = {LoaderProducts}
            className = "bg-black w-screen h-screen"
            alt = "cargando productos" / > : < ItemList items = {items}/>
        } </Fragment>
    )

}