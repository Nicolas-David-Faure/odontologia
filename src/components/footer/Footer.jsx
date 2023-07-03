import React, { useEffect } from 'react'
//logo
import Logo from '../logo/Logo'

//styles
import './scss/footer.scss'
//components
import Footer_divisor2 from './divisors/contact-information/Footer_divisor2'
import Footer_divisor1 from './divisors/links/Footer_divisor1'

//icons

const Footer = () => {
  

  return (
    <footer className='footer__main'>
      <div className='footer__main_divisors'>
        <Footer_divisor1 />
        <Footer_divisor2 />
      </div>
     <div className='footer__main_cont-copyright'> 
       &#169;2023 Clínica Dental XYZ. Todos los derechos reservados.
     </div>
   
    </footer>
  )
}

export default Footer
