import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { defineSection } from '../../store/slice/switchSections'
import './scss/navBar.scss'
const NavBar = () => {
    const dispatch = useDispatch();

  return (
    <nav className='nav__main'>
      <ul className='nav__ul'>
        <li className="nav__lists" 
            onClick={()=>dispatch(defineSection('home'))}>
            Inicio
        </li>
        <li className="nav__lists" 
            onClick={()=>dispatch(defineSection('aboutUs'))}>
            Sobre nosotros
        </li>
        <li className="nav__lists" 
            onClick={()=>dispatch(defineSection('treatments'))}>
            Tratamientos
        </li>
        <li className="nav__lists" 
            onClick={()=>dispatch(defineSection('book'))}>
            Agendar una cita
        </li>
        <li className="nav__lists" 
            onClick={()=>dispatch(defineSection('contact'))}>
            Contacto
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
