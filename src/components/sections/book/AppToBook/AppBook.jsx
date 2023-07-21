import React from 'react'
//componentes
import WishToContinue from './appBookComponents/wishToContinue/WishToContinue'
//styles
import './scss/appBook.scss'
//redux
import { useSelector } from 'react-redux'

const AppBook = () => {
  const appBookValue= useSelector((state)=> state.appBookSlice.valueStep)
  console.log(appBookValue)
  return (
    
    <main className='appBook__main'>
      <WishToContinue />
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