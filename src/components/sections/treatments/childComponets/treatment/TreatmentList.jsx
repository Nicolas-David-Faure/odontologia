import React from 'react'
import './scss/treatmentList.scss'
//Redux
import { useDispatch } from 'react-redux'
import { switchTreatment } from '../../../../../store/slice/switchTreatments/treatmentSlice'

const TreatmentList = ( { title , description , img , id} ) => {
  const dispatch = useDispatch();

  return (
    <>
     <li 
      onClick={()=>dispatch(switchTreatment(id))}
      id={id} className='treatment__title'>{title}</li>
    </>
  )
}

export default TreatmentList
