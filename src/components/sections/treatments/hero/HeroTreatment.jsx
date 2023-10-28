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
       
    </figure>
  )
}

export default HeroTreatment
