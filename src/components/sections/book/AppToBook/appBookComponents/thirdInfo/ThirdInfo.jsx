import React, { useState } from 'react'
import './scss/thirdInfo.scss'
import { useSelector , useDispatch } from 'react-redux';
import { nextStep , backStep , resetSteps , setUserInfo } from '../../../../../../store/slice/appBook';

  
 const ThirdInfo = () => {
  //User info from redux
  const userInfo = useSelector(state=>state.appBookSlice.userInfo);
  const dispatch = useDispatch();
  const [thirdUserInfo, setThirdUserInfo] = useState(userInfo);
  const [ableTextArea, setAbleTextArea] = useState(thirdUserInfo.plusInfo ? true : false);


  const setInfo = (event)=>{
    const isTypeCheckbox = event.target.type === 'checkbox' ? true : false;
    const eventName = event.target.name;
    const eventValue = !isTypeCheckbox ? event.target.value : event.target.checked;

    if(eventName == 'wantGiveMoreInfo'){
      setAbleTextArea(!ableTextArea)
    }else{
      setThirdUserInfo({
      ...thirdUserInfo,
      [eventName]: eventValue
    })
    }
  }

   const next = ()=>{
      dispatch(setUserInfo(thirdUserInfo))
      dispatch(nextStep())
    }
   const back = ()=>{
    dispatch(setUserInfo(thirdUserInfo))
    dispatch(backStep())
  }
  return (
    <section className='thirdInfo__main'>
      <h3 className='thirdInfo__main_title'>Ya casi terminamos { userInfo.name.split(' ')[0] }</h3>
      <p className='thirdInfo__main_description'>Solo falta información adicional para ponernos en contacto</p>

    <article className='thirdInfo__main_cont_input_contacts'>
      <div className='thirdInfo__main_cont_input_contact'>
        <label 
          htmlFor="thirdInfo__email">
          <input 
          type="email" 
          name="email" 
          id="thirdInfo__email"  
          placeholder='Email'
          onChange={(event)=>setInfo(event)}
          className='third__main_input'
          defaultValue={thirdUserInfo.email}
          />
        </label>
        <label 
          htmlFor="thirdInfo__phone-number">

            <input 
            type="number" 
            name="phoneNumber"
            placeholder='Número móvil' 
            id="thirdInfo__phone-number"
            defaultValue={thirdUserInfo.phoneNumber}
            onChange={(event)=>setInfo(event)}/>
        </label>
      </div>

      <div className='thirdInfo__cont-checkpoints'>
          <div className='thirdInfo__cont-input-check'>
            <div style={{width:20 , height:20, margin: "0px 10px"}}>
            <input
            type="checkbox" 
            name="wantGiveMoreInfo" 
            id='thirdInfo__wantGiveMoreInfo'
            defaultChecked={thirdUserInfo.plusInfo ? true : false}
            onClick={(event)=>setInfo(event)} 
            />
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
              name="plusInfo" 
              onChange={(event)=>setInfo(event)} 
              defaultValue={thirdUserInfo.plusInfo}
              cols="30" 
              rows="10" 
              placeholder='Ingresar info adicional..'
              className='third__main_text-area'>
            </textarea>
        
        }
        
         <div className='thirdInfo__cont-input-check'>
            <div style={{width:20 , height:20, margin: "0px 10px"}}>
              <input 
                defaultChecked={thirdUserInfo.more_info}
                type="checkbox" 
                name="more_info" 
                onClick={(event)=>setInfo(event)}
                id="thirdInfo__wantToObtainMoreInfo" />
            </div>

            <label
              className='thirdInfo__wantToObtainMoreInfo-label' 
              htmlFor="thirdInfo__wantToObtainMoreInfo"> 
              Deseo recibir información sobre cuidados dentales a través de mi email
            </label>
        </div>
         
       
      </div>
    </article>


      <div className='thirdInfo__main_cont-btn'>
            <button onClick={()=>back()}>Volver atras</button>
            <button onClick={()=>next()}>Siguiente</button>
      </div>
    </section>
  )
}

export default ThirdInfo
