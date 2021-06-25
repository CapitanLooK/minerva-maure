import React from 'react';
import '../../index.css';

export const Item = () => {
    const showProduct = new Promise((resolve, reject) =>{
        console.log('cargando')
        
        setTimeout(() => {
            let product = {id: 1, titulo: 'Arnes 1', precio: 600, descripcion: 'Descricion del producto', pictureURL: 'https://i.ibb.co/y6s06DR/Screenshot-20210622-214105.jpg'}
            resolve(product)
        }, 2000)
    })
    showProduct.then((list) => {
        console.log(list);
    })
        
    return(

        <div>
<div className="w-full h-screen flex justify-center items-center">
   <div>
        <div className="w-96">  
            <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div className="overflow-hidden relative">
                <img className="w-full transition duration-700 ease-in-out group-hover:opacity-60" src="https://i.ibb.co/y6s06DR/Screenshot-20210622-214105.jpg" alt="product" />
            </div>
            <div className="px-4 py-3 bg-white text-center">
                <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">NOMBRE PRODUCTO</h1>
                <div className="flex py-2 justify-center">
                    <p className="mr-2 text-xs text-gray-600">$45.00</p>
                </div>
                <div className="flex justify-center mt-2">
                    <div className="ml-2">
                        <button className="">Descripcion</button>
                    </div>
                </div>
            </div>
            </div>
       </div>
   </div>
</div>
        </div>
    )
}

export default Item