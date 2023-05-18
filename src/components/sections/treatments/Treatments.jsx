import React, { useEffect } from 'react'
//component
import Treatment from './childComponets/treatment/Treatment'
//style
import './scss/treatments.scss'
//data
import treatments from './data/treatments'
const Treatments = () => {
  
  const displayTreatments =()=>treatments.map(e=>{
   return <Treatment 
      title={e.title}
      description={e.description} 
      img={e.image} 
      key={e.id} />
  })
  

  return (
    <div className='treatments__main'>
      <h1>Tratamientos</h1>
      {displayTreatments()}
    </div>
  )
}

export default Treatments
