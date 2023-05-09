import React from 'react'
import './scss/navBar.scss'
const NavBar = () => {
  return (
    <nav className='nav__main'>
      <ul className='nav__ul'>
        <li className="nav__lists">Inicio</li>
        <li className="nav__lists">Tratamientos</li>
        <li className="nav__lists">Sobre nosotros</li>
        <li className="nav__lists">Contacto</li>
        <li className="nav__lists">Reserva una cita</li>
      </ul>
    </nav>
  )
}

export default NavBar
