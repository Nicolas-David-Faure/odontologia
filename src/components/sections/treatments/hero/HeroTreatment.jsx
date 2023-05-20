import React from 'react'
//redux
import { useDispatch } from 'react-redux'
import { defineSection } from '../../../../store/slice/switchSections/mainSlice'
//styles
import './scss/heroTreatment.scss'
const HeroTreatment = () => {
  const dispatch = useDispatch();
  
  return (
    <figure className='heroTreatment__main'>
        <div className='heroTreatment__container-quote'>
             <p className='heroTreatment__quote'>Los 
          <strong className='heroTreatment__strong strong__light-green'> tratamientos</strong> son procedimientos profesionales 
            diseñados para mantener la 
          <strong className='heroTreatment__strong strong__light-green'> salud bucal</strong> y 
          <strong className='heroTreatment__strong strong__gold'> mejorar la calidad 
            de vida de las personas</strong>. Estos tratamientos abarcan diversas áreas, 
            como la 
          <strong className='heroTreatment__strong strong__light-green'> prevención</strong>, el 
          <strong className='heroTreatment__strong strong__light-blue'> diagnóstico</strong> y el 
          <strong className='heroTreatment__strong strong__light-green'> tratamiento</strong> de problemas dentales.
            A través de <strong className='heroTreatment__strong strong__light-silver'>técnicas</strong> y 
          <strong className='heroTreatment__strong strong__light-silver'> herramientas especializadas</strong>. 
            Trabajamos para 
          <strong className='heroTreatment__strong strong__light-green'> prevenir enfermedades</strong>, 
          <strong className='heroTreatment__strong strong__light-brown'> restaurar</strong> 
            dientes dañados o perdidos, 
          <strong className='heroTreatment__strong strong__light-brown'> corregir</strong> problemas estéticos y 
          <strong className='heroTreatment__strong strong__gold'> promover una sonrisa</strong> 
          <strong className='heroTreatment__strong strong__light-green'> saludable</strong>. 
            Estos tratamientos se adaptan a las 
          <strong className='heroTreatment__strong strong__light-blue'> necesidades individuales de cada paciente</strong>, 
            brindando 
          <strong className='heroTreatment__strong strong__light-green'> soluciones personalizadas</strong> para lograr una 
          <strong className='heroTreatment__strong strong__light-blue'> salud bucal óptima</strong>.</p>
       </div>
    </figure>
  )
}

export default HeroTreatment
