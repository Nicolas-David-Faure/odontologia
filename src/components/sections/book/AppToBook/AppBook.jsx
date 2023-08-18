import React from 'react'
//redux
import { useSelector } from 'react-redux'

//styles
import './scss/appBook.scss'

//components
import WishToContinue from './appBookComponents/wishToContinue/WishToContinue' // step 0
import FirtsInfo from './appBookComponents/firstInfo/FirtsInfo' // step 1
import SecondInfo from './appBookComponents/secondInfo/SecondInfo' //step 2
import ThirdInfo from './appBookComponents/thirdInfo/ThirdInfo'   //step 3
import SureToSend from './appBookComponents/sureToSend/SureToSend'

const AppBook = () => {
  const appBookValue= useSelector((state)=> state.appBookSlice.valueStep) // Bring the value step 
  console.log(appBookValue)
  const bookSwitchStep = (valueStep) => {

    switch (valueStep) {
      case 0:
          return <WishToContinue />
      case 1:
          return <FirtsInfo />
      case 2:
          return <SecondInfo />
      case 3:
          return <ThirdInfo />
      case 4:
          return <SureToSend />
      default:
        break;
    }


  }
  return (

    <main className='appBook__main'>
      {bookSwitchStep(appBookValue)}
    </main>
  )
}

export default AppBook


/*
  El usuario debe brindar una informacion basica minima,
  para poder reservar una cita con con un profesional de
  la salud. 


  //1- Saludar al posible paciente, y pedirle que confirme los terminos
      y condiciones del formulario para poder continuar con la cita
  
  //2- El usuario debe brindar información básica en orden ascendente
      2.1- Nombre y apellido , edad, sexo.
      2.2- Preguntar al paciente el motivo por el cual desea ser atendido:
        -->"Me duele la muela."
        -->"Se me quebró un diente."
        -->"Tengo sangrado en las encías al cepillarme."
        -->"Necesito una limpieza dental de rutina."
        -->"Quisiera obtener información sobre blanqueamiento dental."
        -->"Tengo sensibilidad en los dientes al comer helado."
        -->"Mi mordida ha cambiado recientemente."
        -->"Sufro de mal aliento últimamente."
        -->"Estoy interesado/a en tratamientos de ortodoncia."
        -->"Quiero saber cómo mantener una buena salud bucal."
  
      //3-Pedirle al cliente su infomacion restante:
        Email
        Informacion adicional que desee comentar
        Fecha 
*/