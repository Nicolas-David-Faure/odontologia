import React from 'react'
//redux

import { useDispatch, useSelector } from 'react-redux'
import { nextStep , resetSteps , warningSureToExit} from '../../../../../../store/slice/appBook'
//style
import './scss/firstInfo.scss'
import WarningSureToExit from './WarningSureToExit'
//components


const FirtsInfo = () => {
  const warningValue = useSelector(state => state.appBookSlice.sureToExit)
  const dispatch = useDispatch()

  console.log(warningValue)
  return (
    <div className='firtsInfo__main'>
      <div className='firstInfo__cont-title'>
        <h3>Comencemos por lo básico 😃</h3>
      </div>

      <div className='firstInfo__cont-labels'>
        <label className='firstInfo__labels' htmlFor="">
          <input type="text" placeholder='Nombre'/>
        </label>
  
        <label className='firstInfo__labels' htmlFor="">
          <input type="text" placeholder='Apellido'/>
        </label>

        <label className='firstInfo__labels' htmlFor="">
          <input type="number" placeholder='Edad'/>
        </label>
      </div>
    {warningValue && <WarningSureToExit />}
      <div className='firtsInfo__cont-btns'>
        <button onClick={()=>dispatch(nextStep())}>Siguiente</button>
        <button onClick={()=>dispatch(warningSureToExit())}>No continuar</button>
      </div>
    </div>
  )
}

export default FirtsInfo
