import { useState } from 'react'

import './assets/styles/_App.scss'
//components
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'

import Home from './components/sections/home/Home'
import Contact from './components/sections/contact/Contact'
import AboutUs from './components/sections/aboutUs/AboutUs'
import Treatments from './components/sections/treatments/Treatments'
import Book from './components/sections/book/Book'

import Footer from './components/footer/Footer'

//redux
import { useSelector  } from 'react-redux'

function App() {
  const mainSlice = useSelector((state)=>state.mainDisplaySlice.value)
 
  const switchMainContent =()=>{
    switch(mainSlice){
      case "home":
        return <Home />
      case "aboutUs":
        return <AboutUs />
      case "treatments": 
      return <Treatments />
      case "book":
        return <Book />
      case "contact":
        return <Contact />
    default:
      return <Home /> 
    }
  }

  return (
    <>
      <Header />
      <NavBar />
      {switchMainContent()}
      <Footer />
    </>
  )
}

export default App
