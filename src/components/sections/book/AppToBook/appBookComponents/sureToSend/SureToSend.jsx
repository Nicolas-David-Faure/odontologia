import React from 'react'
//styles
import './scss/sureToSend.scss'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { nextStep , backStep , resetSteps , setUserInfo } from '../../../../../../store/slice/appBook';
const SureToSend = () => {
  const { name , lastName , phoneNumber , age , reasons , plusInfo , more_info , email } = useSelector(state=>state.appBookSlice.userInfo);
  const dispatch = useDispatch()
 

  console.log(useSelector(state=>state.appBookSlice.userInfo))
  const next = ()=>{
    
    dispatch(nextStep())
  }
  const back = ()=>{
    
    dispatch(backStep())
  }



  return (
    <section className='sureToSend__main'>
      <h3 className='sureToSend__title'>Perfecto { name.split(' ')[0] }</h3>
      <p className='sureToSend__description'>Ahora verifica si los datos ingresados estan correctos, sino puedes volver a cambiarlos 😉</p>
      <article className='sureToSend__main_p'>
        <p>{name.split(' ').length > 1 ? 'Nombres' : 'Nombre'}: {name}</p>

        <p>Apellido: {lastName}</p>

        <p>Edad: {age}</p>

        <ul>Motivos: 
          {reasons.map((reason , i)=>{
          return <li key={i}>{ reason }</li>
        })}</ul>

        <p>Numero móvil: {phoneNumber}</p>

        <p>Email: {email}</p>

        <p>Informacion Adicional: {plusInfo}</p>

        <p>Desea recibir mas info?: {more_info ? 'Sí' : 'No'}</p>
      </article>

      <div className='sureToSend__main-btn'>
            <button onClick={()=>back()}>Volver atras</button>
            <button onClick={()=>next()}>Enviar</button>
      </div>
    </section>
  )
}

export default SureToSend
