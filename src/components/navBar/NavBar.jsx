import React from 'react'
//framer motion
import { motion } from 'framer-motion'

//redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { defineSection , underlineSelectedItem } from '../../store/slice/switchSections'
import { navName } from '../../store/slice/switchSections/navName'

//styles
import './scss/navBar.scss'

const NavBar = () => {
  const selected = useSelector((state)=>state.mainDisplaySlice.underlineSelectedItem)
  const dispatch = useDispatch();

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
