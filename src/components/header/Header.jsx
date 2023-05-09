import React from 'react'
//Styles
import './scss/header.scss'
//logo
import logo from '../../assets/img/logo/logo.png'
import Logo from '../logo/Logo'
const Header = () => {
  return (
    <header className='header__main'>
         <Logo />
    </header>
  )
}

export default Header
