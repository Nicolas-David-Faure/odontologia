import React from 'react'
//components
import Divisor3 from './divisors/Divisor3'
import Divisor4 from './divisors/Divisor4'
//redux
import { useSelector  } from 'react-redux'
import { useDispatch } from 'react-redux'
import { defineSection , underlineSelectedItem } from '../../../../store/slice/switchSections/mainSlice'
//slide
import SlideshowContainer from '../../../slideshow/SlideshowContainer'
//styles
import './scss/main.scss'
//navName
import { navName } from '../../../../store/slice/switchSections/navName'


const Main = () => {

  const dispatch = useDispatch();
  const mainSlice = useSelector((state)=>state.mainDisplaySlice.value)
  return (
    <main className='main__container'>
      <div className='main__container_divisors'>
          <div className="main__divisors"> 
          {mainSlice == 'home' && <SlideshowContainer />}
          
          </div>
          <div className="main__divisors">
              <div className='main__divisor_2_container_frase'>
                <p>Conozca todos los tratamientos que tenemos para ofrecerte</p>
              <button 
              onClick={()=>{
                window.scrollTo({
                  top: 190,
                  behavior: 'smooth'
                });
                setTimeout(()=>{
                  dispatch(underlineSelectedItem(navName[2]))
                  dispatch(defineSection("treatments"))
                },500)
                
              }}
              className='main__button_treatments'>Ver tratamientos 
              </button>
              </div> 
              
          </div>
          
          <div className="main__divisors">
            <Divisor3 />
          </div>
          <div className="main__divisors">
            <Divisor4 />
          </div>
        </div>
    </main>
  )
}

export default Main
