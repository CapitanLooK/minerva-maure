import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../components/itemdetail/ItemDetail'
import { NotFound } from '../notfound/NotFound'
import { dataBase } from '../../firebase/firebase'
import LoaderProduct from '../../img/cargandoProducto.gif'
import '../../index.css';


export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        const db = dataBase
        const productsList = db.collection('products').doc(id)

        productsList.get().then((doc) => {
            if (!doc.exist) {
                console.log('producto no encontrado exist');
                setNotFound(true)
            }
            setItem({ id: doc.id, ...doc.data() })
        })

            .catch((error) => console.log('producto no encontrado', error))
            .finally(() => {
                setIsloading(false)
                setNotFound(false)
            })
    }, [id])



    return (
        <Fragment>
            {
                notFound ? (<NotFound />)
                    :
                    (isLoading ? (<img src={LoaderProduct} alt="cargando" className="bg-black w-screen h-screen" />)
                        :
                        (<ItemDetail key={id} item={item} />)
                    )
            }
        </Fragment>
    )
}