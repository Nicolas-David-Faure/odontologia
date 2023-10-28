import React from 'react';
//component
import TreatmentDescription from './childComponets/treatment/TreatmentDescription';
import HeroTreatment from './hero/HeroTreatment';
//style
import './scss/treatments.scss';

const Treatments = () => {
  
    
    return (
      <main className='treatments__main'>
      <HeroTreatment />

      <TreatmentDescription />

    </main>
  )
}

export default Treatments
