import React from 'react'
import '../../index.css'
import logo from '../../img/logo.jpeg'
import search from '../../svg/search.svg'
import user from '../../svg/user.svg'
import CartWidget from '../cartwidget/CartWidget'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return(
        <div>
            <nav className="flex bg-black static">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 ml-5">
                                <NavLink to='/'><img className="h-20 w-20" src={logo} alt="Logo Minerva" /></NavLink>
                            </div>
                            <div className="ml-20 space-x-10 flex">
                                <button><NavLink activeClassName="text-blue-400" className="text-white" exact to='/'>INICIO</NavLink></button>
                                <button><NavLink activeClassName="text-blue-400" className="text-white" to='/category/lenceria'>LENCERIA</NavLink></button>
                                <button><NavLink activeClassName="text-blue-400" className="text-white" to='/category/arneses'>ARNESES</NavLink></button>
                                <button><NavLink activeClassName="text-blue-400" className="text-white" to='/category/ropa'>ROPA</NavLink></button>
                                <button><NavLink activeClassName="text-blue-400" className="text-white" to='/category/accesorios'>ACCESORIOS</NavLink></button>
                            </div>
                            <div className="ml-4 flex items-center space-x-7 absolute right-20">
                                <button><img className="h-6 w-6" src={search} alt="Boton de Busqueda" /></button>
                                <button><img className="h-6 w-6" src={user} alt="Boton Panel de Usuario" /></button>
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