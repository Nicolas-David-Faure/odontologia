import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { defineSection } from '../../../../store/slice/switchSections/mainSlice'
//styles
import './scss/hero.scss'
const Hero = () => {
  const dispatch = useDispatch();
  
  return (
    <section className='hero__main'>
        <div className='hero__container-quote'>
             <p className='hero__quote'>La vida es corta <strong>¡Sonría!</strong>
             <br/> 
        Mientras tenga <strong>dientes</strong>..
         <br/>Y <strong>si ya no le quedan</strong>... 
        <br/>¡Nosotros le <strong>colocamos</strong> unos <strong>nuevos!</strong></p>
        <button 
        onClick={()=>dispatch(defineSection("book"))}
        className='hero__button'>Agendar Cita</button>
        </div>
       
    </section>
  )
}

export default Hero
