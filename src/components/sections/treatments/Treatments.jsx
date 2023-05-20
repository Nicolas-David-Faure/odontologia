import React, { useEffect } from 'react'
//component
import Treatment from './childComponets/treatment/Treatment'
import HeroTreatment from './hero/HeroTreatment'
//style
import './scss/treatments.scss'
//data
import treatments from './data/treatments'
//assets
import treatmentBanner from '../../../assets/img/treatments/banner.jpg'
const Treatments = () => {
  
  const displayTreatments =()=>treatments.map(e=>{
   return <Treatment 
      title={e.title}
      description={e.description} 
      img={e.image} 
      key={e.id}
       />
  })
  

  return (
    <main className='treatments__main'>
      <HeroTreatment />     
      <article className='treatments__container_treatment'>
        {displayTreatments()}
      </article>
    </main>
  )
}

export default Treatments
