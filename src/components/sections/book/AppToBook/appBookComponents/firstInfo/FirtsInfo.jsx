import React, { useState , useRef} from 'react'
//redux

import { useDispatch, useSelector } from 'react-redux';
import { nextStep , resetSteps , warningSureToExit , setUserInfo} from '../../../../../../store/slice/appBook';
//style
import './scss/firstInfo.scss'
import WarningSureToExit from './WarningSureToExit';
//components


const FirtsInfo = () => {
  const inputName = useRef()
  const inputLastName = useRef()
  const inputAge = useRef()
  const userInfo = useSelector(state=>state.appBookSlice.userInfo)
  const warningValue = useSelector(state => state.appBookSlice.sureToExit)

  const [firstUserInfo, setFirstUserInfo] =  useState(userInfo)
  const dispatch = useDispatch()


  const setInfo = (event)=>{
    const eventName = event.target.name;
    const eventValue = event.target.value;
    setFirstUserInfo({
      ...firstUserInfo,
      [eventName]: eventValue
    })
  }

  const next=()=>{
    const nameValue = inputName.current.value;
    const lastNameValue = inputLastName.current.value;
    const ageValue = inputAge.current.value;

    if(nameValue && lastNameValue && ageValue){
      dispatch(setUserInfo(firstUserInfo))
      dispatch(nextStep())
    }else{
      !nameValue ? inputName.current.style.border = '2px solid red' : '';
      !lastNameValue ? inputLastName.current.style.border = '2px solid red' : '';
      !ageValue ? inputAge.current.style.border = '2px solid red' : '';
      alert('All fields must be completed')
    }
  }

  return (
    <form className='firtsInfo__main'>
  
      <div className='firstInfo__cont-title'>
        <h3>Comencemos por lo básico 😃</h3>
      </div>

      <div className='firstInfo__cont-labels'>
        <label className='firstInfo__labels' htmlFor="">
          <input 
          onChange={(event)=>setInfo(event)} 
          value={firstUserInfo.name} 
          name='name' 
          type="text" 
          placeholder='Nombre'
          ref={inputName}
          minLength={4}
          required
          />
       
        </label>
  
        <label className='firstInfo__labels' htmlFor="">
          <input 
          value={firstUserInfo.lastName}
          onChange={(event)=>setInfo(event)} 
          name='lastName' 
          type="text" 
          placeholder='Apellido'
          minLength={5}
          ref={inputLastName}
          required
          />
        </label>

        <label className='firstInfo__labels' htmlFor="">
          <input 
          value={firstUserInfo.age}
          onChange={(event)=>{
            setInfo(event)
          }} 
          name='age' 
          type="number" 
          placeholder='Edad'
          pattern="\d*"
          ref={inputAge}
          maxLength={3}
          required
          />
        </label>
      </div>

    {warningValue && <WarningSureToExit />}
      <div className='firtsInfo__cont-btns'>
        <button  type='button' onClick={()=>dispatch(warningSureToExit())}>No continuar</button>
        <button  type='button' onClick={()=>next()}>Siguiente</button>
      </div>
    </form>
  )
}

export default FirtsInfo
