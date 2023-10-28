import React from 'react'
import './scss/treatmentNav.scss'
//Redux
import { useDispatch } from 'react-redux'
import { switchTreatment } from '../../../../../store/slice/switchTreatments/treatmentSlice'
//DATA  
import treatments from '../../data/treatments'

const TreatmentList = ( { title , description , img , id} ) => {
  const dispatch = useDispatch();
  return (
    <>
     <li 
      onClick={()=>dispatch(switchTreatment(id))}
      id={id} className='treatment__list'>{title}</li>
    </>
  )
}

const TreatmentNav = () => {
  return (
    <nav className='treatments__nav'>
          <ul className='treatments__ul'>
            {
            treatments.map((e,i)=>(
               <TreatmentList 
                 title={e.title}
                 key={e.id}
                 id={i}
                 />
               ))
            }
          </ul>
    </nav>
  )
}
export default TreatmentNav


