import React, { Fragment } from 'react'
import '../../index.css'
import logo from '../../img/logo.jpeg'
import search from '../../svg/search.svg'
import user from '../../svg/user.svg'
import { CartWidget } from '../cartwidget/CartWidget'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <Fragment>
            <nav className="sticky top-0 w-full bg-black">
                <div>
                    <div className="flex">
                        <NavLink className="flex-shrink-0 ml-5 mt-2" to='/'><img className="h-20 w-20 " src={logo} alt="Logo Minerva" /></NavLink>
                        <div className="m-auto space-x-20 mt-7">
                            <NavLink activeClassName="text-blue-400" className="text-white uppercase" exact to='/'>inicio</NavLink>
                            <div className="group inline-block">
                                <button className="outline-none focus:outline-none bg-black mb-5">
                                    <span className="uppercase text-white">productos</span>
                                </button>
                                <ul className="bg-black rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top px-10">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-900">
                                        <NavLink activeClassName="text-blue-400" className="text-white uppercase" to='/category/lenceria'>lenceria</NavLink>
                                    </li>
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-900">
                                        <NavLink activeClassName="text-blue-400" className="text-white uppercase" to='/category/arneses'>arneses</NavLink>
                                    </li>
                                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-900">
                                        <NavLink activeClassName="text-blue-400" className="text-white uppercase" to='/category/ropa'>ropa</NavLink>
                                    </li>
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-900">
                                        <NavLink activeClassName="text-blue-400" className="text-white uppercase" to='/category/accesorios'>accesorios</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex mt-7 space-x-10 mr-10">
                            <img className="h-6 w-6" src={search} alt="Boton de Busqueda" />
                            <img className="h-6 w-6" src={user} alt="Boton Panel de Usuario" />
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar