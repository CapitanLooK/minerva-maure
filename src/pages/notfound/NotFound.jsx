import React from 'react'
import { Page } from '../page/Page'
import notFoundImage from '../../img/noDisponible.png'

export const NotFound = () => {
    return (
        <Page>
            <div className="bg-black">
                <img className="mx-auto h-screen w-screen" src={notFoundImage} alt="Pagina No Encontrada" />
            </div>
        </Page>
    )
}