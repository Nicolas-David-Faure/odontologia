import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { defineSection , underlineSelectedItem} from '../../../../store/slice/switchSections/mainSlice'
//navName
import { navName } from '../../../../store/slice/switchSections/navName'
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
        onClick={()=>{
          window.scrollTo({
            top: 190,
            behavior: 'smooth'
          });
         setTimeout(()=>{
          dispatch(underlineSelectedItem(navName[3]))
          dispatch(defineSection("book"))
         },300)
          
        }}
        className='hero__button'>Agendar Cita</button>
        </div>
       
    </section>
  )
}

export default Hero
