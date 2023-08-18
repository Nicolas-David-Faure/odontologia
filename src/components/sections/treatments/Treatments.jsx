import React, { useEffect } from 'react';
//component
import TreatmentList from './childComponets/treatment/TreatmentList';
import TreatmentDescription from './childComponets/treatment/TreatmentDescription';
import HeroTreatment from './hero/HeroTreatment';
//style
import './scss/treatments.scss';
//data
import treatments from './data/treatments';
//assets
import treatmentBanner from '../../../assets/img/treatments/banner.jpg';

const Treatments = () => {
  const displayTreatments = treatments.map((e,i)=>{
   return <TreatmentList 
      title={e.title}
      key={e.id}
      id={i}
      />
    })
    
    {/*    */}   
    
    return (
      <main className='treatments__main'>
      <HeroTreatment />
      

      <article>
        <nav className='treatments__nav'>
          <ul className='treatments__ul'>
            {displayTreatments}
          </ul>
        </nav>
        <TreatmentDescription />
      </article>
    </main>
  )
}

export default Treatments
