import React from 'react'
//components
import Hero from './hero/Hero'
import Main from './main/Main'
//style
import './scss/home.scss'
Hero
const Home = () => {
  return (
    <main className='home__main'>
    <Hero />
    <Main />
    </main>
  )
}

export default Home
