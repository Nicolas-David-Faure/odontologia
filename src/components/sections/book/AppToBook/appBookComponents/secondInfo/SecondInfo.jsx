import React from 'react'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { backStep, nextStep , setUserInfo} from '../../../../../../store/slice/appBook'
//data
import { dataSecondInfo } from './data/dataSecondInfo'
//styles
import './scss/secondInfo.scss'

const SecondInfo = () => {
  const { reasons = [], name } = useSelector(state=>state.appBookSlice.userInfo)
  const dispatch = useDispatch()

  const reasonsArray = [...reasons];

  const setInfo = ( content )=>{
    if(reasonsArray.includes(content)){
      const indexOfContent = reasonsArray.indexOf(content)
      reasonsArray.splice(indexOfContent,1)
    }else
      reasonsArray.push(content)
  }

  const next = ()=>{
    if(reasonsArray.length >= 1){
      dispatch(setUserInfo({reasons: reasonsArray}))
      dispatch(nextStep())
    }else{
      alert('You must select at least one reason')
    }
  }
  const back = ()=>{
    dispatch(setUserInfo({reasons: reasonsArray}))
    dispatch(backStep())
  }

  return (
    <div className='secondInfo_main'>
        <h3>Muy bien { name }</h3>
        <p>Ahora selecciona cuales son los motivos principales de tu visita 😬</p>

      <div className='secondInfo_cont-selectors'>
        {dataSecondInfo.map(({ content , id }, index)=>
          <SecondInfo_cont_input_label handleInfo={setInfo} key={index} content={content} id={id} index={index + 1} />
        )}
      </div>

      <div className='secondInfo__cont-btn'>
            <button onClick={()=>back()}>Volver atras</button>
            <button onClick={()=>next()}>Siguiente</button>
      </div> 
    </div>
  )
}

const SecondInfo_cont_input_label = ( { handleInfo , content , id , index } )=>{
  const { reasons = [] } = useSelector(state=>state.appBookSlice.userInfo)
  
  return (
    <article className='secondInfo_cont-input-label'>
      <div className='secondInfo_cont-input'>
          <input 
            defaultChecked={reasons.includes(content) ? true : false} 
            onClick={()=>handleInfo(content)} 
            type="checkbox" 
            name={index} 
            id={id + index} />
      </div>
      <label htmlFor={id + index} >{content}</label>
    </article>
  )
}
export default SecondInfo
