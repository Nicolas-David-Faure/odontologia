import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { defineSection } from '../../../../store/slice/switchSections/mainSlice'
//slide
import SlideshowContainer from '../../../slideshow/SlideshowContainer'
//styles
import './scss/main.scss'
const Main = () => {
  const dispatch = useDispatch();

  return (
    <main className='main__container'>
      <div className='main__container_divisors'>
          <div className="main__divisors">
          <SlideshowContainer />
          </div>
          <div className="main__divisors">
              <div className='main__divisor_2_container_frase'>
                <p>Conoce todos los tratamientos que tenemos para ofrecerte</p>
              <button 
              onClick={()=>dispatch(defineSection("treatments"))}
              className='main__button_treatments'>Ver tratamientos 
              </button>
              </div> 
              
          </div>
          
          <div className="main__divisors">
              <p>Hola a todos esto es un parrafo para demostrar 
                que se puede corregir este problema con una simple caja dentro del divisor</p>
          </div>
          <div className="main__divisors">
            <p>Hola a todos esto es un parrafo para demostrar que
              se puede corregir este problema con una simple caja dentro del divisor</p>
          </div>
        </div>
    </main>
  )
}

export default Main
