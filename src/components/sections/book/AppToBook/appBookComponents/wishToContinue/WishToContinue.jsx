import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { nextStep , backStep , resetSteps } from '../../../../../../store/slice/appBook'
//style
import './wishToContinue.scss'
const WishToContinue = () => {
  const dispatch = useDispatch()
  return (
    <div className='wishToContinue_main'>
      <h3>Hola, bienvenid@</h3>
      <p>Antes de continuar con tu reserva</p>
      <p>A lo largo del formulario se te pedirá información personal, 
        como por ejemplo tu nombre, apellido , email, número telefónico,etc..</p>
        <div className='appBook__main_div_continue'>
          <p>¿Estás de acuerdo con estas condiciones?</p>
          <div className='appBook__main_div_continue_cont-btn'>
            <button onClick={()=>dispatch(nextStep())}>Sí</button>
            <button onClick={()=>dispatch(backStep())}>No, deseo volver atras</button>
          </div>
        </div>
    </div>
  )
}

export default WishToContinue
