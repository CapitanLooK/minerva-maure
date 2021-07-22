import React from 'react'
import  notFoundImage from '../../img/noDisponible.png'

export const NotFound = () => {
    return(
        <div className="bg-black ">
        <img  className="mx-auto h-screen w-screen" src={notFoundImage} alt="Pagina No Encontrada" />
        </div>
    )
}