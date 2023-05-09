import { useState } from 'react'

import './assets/styles/_App.scss'
//components
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
//redux
import { useSelector , useDispatch } from 'react-redux'
import { decrement , increment , incrementByAmount } from './store/slice'
function App() {
  const mainSlice = useSelector((state)=>state.mainDisplaySlice.value)
  const dispatch = useDispatch()


  return (
    <>
      <Header />
      <NavBar />
    </>
  )
}

export default App
