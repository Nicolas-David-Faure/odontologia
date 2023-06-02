import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { defineSection } from '../../../../../store/slice/switchSections/mainSlice'
//Styles
import './scss/divisor4.scss'

const Divisor4 = () => {
  const dispatch = useDispatch();
  return (
    <section className='divisor4__container'>
        <div className='divisor4__cont_title'>
            <h2>¿Te duele la muela?</h2>
            <h3>¡No esperes mas!</h3>
            <button onClick={()=>dispatch(defineSection('book'))}>Agenda una cita</button>
        </div>   
        <div className='divisor4__cont_title'>
            <h3>¿Necesitas mas informacion o deseas realizar alguna consulta?</h3>
            <button onClick={()=>dispatch(defineSection('contact'))}>Contactanos</button>
        </div>
    </section>
  )
}

export default Divisor4
