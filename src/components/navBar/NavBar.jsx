import React, { useEffect, useState } from 'react'
//framer motion
import { motion } from 'framer-motion'
//redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { defineSection , underlineSelectedItem } from '../../store/slice/switchSections'
import './scss/navBar.scss'
import { navName } from '../../store/slice/switchSections/navName'
const NavBar = () => {
  const selected = useSelector((state)=>state.mainDisplaySlice.underlineSelectedItem)
  //const [selected, setSelected] = useState(navName[0])
  const dispatch = useDispatch();
  console.log(selected)
  
  
  return (
    <nav className='nav__main'>
      <ul className='nav__ul'>
        {
          navName.map(( item )=>(
            <li className={item === selected ? 'nav__lists selected' : 'nav__lists' }
            id='#nav_bar'
            key={item.action}
            onClick={()=>(
              dispatch(underlineSelectedItem(item)),
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
