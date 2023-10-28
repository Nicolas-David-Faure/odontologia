import React, { useEffect, useState } from 'react'

import { Slideshow , Slide , TextSlide } from './Slideshow.jsx';
import styled from 'styled-components'
//Img slideshow
import img1 from './img/main1.jpg'
import img2 from './img/main2.jpg'
import img3 from './img/chequeo-dental.jpg'
import img4 from './img/main5.jpg'
//redux

const SlideshowContainer = () => {

  

  return (
    <>
      {
      <Slideshow controls={true} autoplay={true} speedTransition="500" speedInterval="1000">
      <Slide>
        <img style={{height:'100%'}} src={img1} alt="" />
      
      <TextSlide fontSize='1rem'  textColor='#efefef'>
        <p>Las caries son una de las principales causas del dolor de muelas. Cuando las bacterias presentes en la boca generan ácidos que dañan el esmalte dental, pueden formarse orificios o cavidades en los dientes, lo que provoca dolor.</p>
      </TextSlide>
    </Slide>
    <Slide>
      
        <img style={{height:'100%'}} src={img2} alt="" />
  
      <TextSlide fontSize='1rem'  textColor='#efefef'>
        <p>La ortodoncia ayuda a mejorar la posición de los dientes y las mandíbulas para que funcionen correctamente y se vean bien. 
        La ortodoncia no solo mejora la apariencia, sino también la salud y la forma en que los dientes encajan al morder. </p>
      </TextSlide>
    </Slide>
    <Slide>
   
        <img style={{height:'100%'}} src={img3} alt="" />
   
      <TextSlide fontSize='1rem'  textColor='#efefef'>
        <p>Los chequeos dentales regulares son fundamentales para mantener una buena salud bucal. No solo ayudan a detectar y prevenir problemas dentales,
           sino que también te brindan orientación y educación para mantener una sonrisa saludable a largo plazo.</p>
      </TextSlide>
    </Slide>

    <Slide>
    
        <img style={{height:'100%'}} src={img4} alt="" />
  
      <TextSlide fontSize='1rem'  textColor='#efefef'>
        <p>Las muelas del juicio a menudo pueden causar apiñamiento dental, desplazando otros dientes y
           afectando la alineación de la dentadura. La extracción temprana puede prevenir problemas futuros
            y mantener la alineación correcta de los dientes.</p>
      </TextSlide>
    </Slide>
  </Slideshow>
      }
    </>
  )
}

export default SlideshowContainer
