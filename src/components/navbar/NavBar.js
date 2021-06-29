import React from 'react'
import '../../index.css'
import logo from '../../img/logo.jpeg'
import search from '../../svg/search.svg'
import user from '../../svg/user.svg'
import CartWidget from '../cartwidget/CartWidget'

export const NavBar = () => {
    return(
        <div>
            <nav className="flex bg-black static">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 ml-5">
                                <img className="h-20 w-20" src={logo} alt="" />
                            </div>
                            <div className="ml-20 space-x-10 flex">
                                <button><span className="text-white">INICIO</span></button>
                                <button><span className="text-white">LENCERIA</span></button>
                                <button><span className="text-white">ARNESES</span></button>
                                <button><span className="text-white">ROPA</span></button>
                                <button><span className="text-white">ACCESORIOS</span></button>
                            </div>
                            <div className="ml-4 flex items-center space-x-7 absolute right-20">
                                <button><img className="h-6 w-6" src={search} alt="" /></button>
                                <button><img className="h-6 w-6" src={user} alt="" /></button>
                                <CartWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar