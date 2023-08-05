import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { resetSteps , warningSureToExit} from '../../../../../../store/slice/appBook'
//styles
import './scss/warningSureToExit.scss'

const WarningSureToExit = () => {
  const dispatch = useDispatch()
  return (
    <span className='warningSureToExit__main'>
      <h2>⚠️¿Seguro que quieres salir?⚠️</h2>


      <p>Si te sales no podras continuar con tu reserva y deberás comenzar de nuevo.</p>
      <div className='warningSureToExit__cont-btns'>
        <button onClick={()=>dispatch(resetSteps())}>Si, salir</button>
        <button onClick={()=>dispatch(warningSureToExit())}>Volver atras</button>
      </div>
    </span>
  )
}

export default WarningSureToExit
