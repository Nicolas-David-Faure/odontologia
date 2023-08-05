import React, { useState } from 'react'
import './scss/thirdInfo.scss'
import { useSelector , useDispatch } from 'react-redux';
import { nextStep , backStep , resetSteps } from '../../../../../../store/slice/appBook';


const ThirdInfo = ( { name = 'Nicolas'}) => {
  const [ableTextArea, setAbleTextArea] = useState(false)
  const [wantObtainMoreInfo, setwantObtainMoreInfo] = useState(false)
  const dispatch = useDispatch();
  const userInfo = useSelector(state=>state.appBookSlice.userInfo)
  const appBookValue = useSelector((state)=> state.appBookSlice.valueStep) 
  
  console.log(userInfo)
  
  return (
    <div className='thirdInfo__main'>

      <h3 className='thirdInfo__main_title'>Ya casi terminamos { name }</h3>
      <p className='thirdInfo__main_description'>Solo falta información adicional para ponernos en contacto</p>

    <div className='thirdInfo__main_cont_input_contacts'>
      <div className='thirdInfo__main_cont_input_contact'>
        <label 
          htmlFor="thirdInfo__email">
          <input 
          type="email" 
          name="" 
          id="thirdInfo__email"  
          placeholder='Email'
          className='third__main_input'
          />
        </label>
        <label 
          htmlFor="thirdInfo__phone-number">
         
            <input 
            type="number" 
            name=""
            placeholder='Número móvil' 
            id="thirdInfo__phone-number" />
      
        </label>
      </div>

      <div className='thirdInfo__cont-checkpoints'>

        

          <div className='thirdInfo__cont-input-check'>
            <div style={{width:20 , height:20, margin: "0px 10px"}}>
            <input 
            type="checkbox" 
            name="wantGiveMoreInfo" 
            id='thirdInfo__wantGiveMoreInfo'
            onClick={()=>{setAbleTextArea(!ableTextArea)}}/>
            </div>

            <label
            className='thirdInfo__label-wantGiveMoreInfo' 
            htmlFor="thirdInfo__wantGiveMoreInfo"> 
            Deseo brindar más información
            </label>
          </div>
         
       
      {
        ableTextArea &&
        
            <textarea 
              name="thirdInfo__other-info" 
              id="" 
              cols="30" 
              rows="10" 
              placeholder='Ingresar info adicional..'
              className='third__main_text-area'>
            </textarea>
        
        }
        
         <div className='thirdInfo__cont-input-check'>
            <div style={{width:20 , height:20, margin: "0px 10px"}}>
              <input 
              
                onClick={()=>setwantObtainMoreInfo(!wantObtainMoreInfo)}
                type="checkbox" 
                name="" 
                id="thirdInfo__wantToObtainMoreInfo" />
            </div>

            <label
              className='thirdInfo__wantToObtainMoreInfo-label' 
              htmlFor="thirdInfo__wantToObtainMoreInfo"> 
              Deseo recibir información sobre cuidados dentales a través de mi email
            </label>
        </div>
         
       
      </div>
    </div>


      <div className='thirdInfo__main_cont-btn'>
            <button onClick={()=>dispatch(backStep())}>Volver atras</button>
            <button onClick={()=>dispatch(nextStep())}>Enviar</button>
      </div>
    </div>
  )
}

export default ThirdInfo
