import React from 'react'
import './scss/treatment.scss'
const Treatment = ( { title , description , img } ) => {
  return (
    <div className='treatment__main'>
      <h3 className='treatment__title'>{title}</h3>
      <hr />
      <p className='treatment__description'>{description}</p>
      <figure className='treatment__container_image'>
        <img  className='treatment__image'src={img}/> 
      </figure>
    </div>
  )
}

export default Treatment
