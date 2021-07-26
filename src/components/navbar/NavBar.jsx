import React, { Fragment } from 'react'
import '../../index.css'
import logo from '../../img/logo.jpeg'
import search from '../../svg/search.svg'
import user from '../../svg/user.svg'
import CartWidget from '../cartwidget/CartWidget'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return(
        <Fragment>
            <nav className="bg-black">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 ml-5">
                                <NavLink to='/'><img className="h-20 w-20" src={logo} alt="Logo Minerva"/></NavLink>
                            </div>
                            <div className="ml-20 space-x-10 flex">
                                <NavLink activeClassName="text-blue-400" className="text-white" exact to='/'>INICIO</NavLink>
                                <NavLink activeClassName="text-blue-400" className="text-white" to='/category/lenceria'>LENCERIA</NavLink>
                                <NavLink activeClassName="text-blue-400" className="text-white" to='/category/arneses'>ARNESES</NavLink>
                                <NavLink activeClassName="text-blue-400" className="text-white" to='/category/ropa'>ROPA</NavLink>
                                <NavLink activeClassName="text-blue-400" className="text-white" to='/category/accesorios'>ACCESORIOS</NavLink>
                            </div>
                            <div className="ml-4 flex items-center space-x-7 absolute right-20">
                                <img className="h-6 w-6" src={search} alt="Boton de Busqueda" />
                                <img className="h-6 w-6" src={user} alt="Boton Panel de Usuario" />
                                <CartWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar