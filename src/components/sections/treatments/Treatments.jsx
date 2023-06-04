import React, { useEffect } from 'react';
//component
import Treatment from './childComponets/treatment/Treatment';
import HeroTreatment from './hero/HeroTreatment';
//redux
import { useSelector } from 'react-redux';


//style
import './scss/treatments.scss';
//data
import treatments from './data/treatments';
//assets
import treatmentBanner from '../../../assets/img/treatments/banner.jpg';
const Treatments = () => {
  const treatmentState = useSelector(store=>store.treatmentSlice.treatmentIndexToDisplay)

  const displayTreatments =()=>treatments.map((e,i)=>{
   return <Treatment 
      title={e.title}
      key={e.id}
      id={i}
      />
    })
    
    {/*  <HeroTreatment />  */}   
    
    return (
      <main className='treatments__main'>
      <nav className='treatments__nav'>
        <ul className='treatments__ul'>
         {displayTreatments()}
        </ul>
      </nav>
      <article className='treatments__content'>
          <h1>{treatmentState !== null ?  treatments[treatmentState].title : "ES NULO"}</h1>
          <p>{treatmentState !== null ? treatments[treatmentState].description : "ES NULO"}</p>
      </article>
    </main>
  )
}

export default Treatments
