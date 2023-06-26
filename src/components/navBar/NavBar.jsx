import React, { useState } from 'react'
//framer motion
import { motion } from 'framer-motion'
//redux
import { useDispatch } from 'react-redux'
import { defineSection } from '../../store/slice/switchSections'
import './scss/navBar.scss'

const navName = [
  {label:'Inicio', action:'home'},
  {label:'Sobre nosotros', action:'aboutUs'},
  {label:'Tratamientos', action:'treatments'},
  {label:'Agendar una cita', action:'book'},
  {label:'Contacto', action:'contact'},
]
const NavBar = () => {
  const [selected, setSelected] = useState(navName[0])
  const dispatch = useDispatch();
  
  return (
    <nav className='nav__main'>
      <ul className='nav__ul'>
        {
          navName.map(( item )=>(
            <li className={item === selected ? 'nav__lists selected' : 'nav__lists' }
            key={item.action}
            onClick={()=>(
              setSelected(item),
              dispatch(defineSection(item.action))
              )}>
            {item.label}
            { item === selected ?  <motion.div className='underline' layoutId='underline' />: null }
          </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar
