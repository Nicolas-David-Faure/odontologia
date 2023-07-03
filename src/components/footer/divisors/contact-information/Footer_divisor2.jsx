import React from 'react'

//styles
import '../../scss/footer.scss'
//icons
import iconWhatsapp from '../../../../assets/img/incons/whatsapp.svg'
import iconFacebook from '../../../../assets/img/incons/facebook.svg'
import iconInstagram from '../../../../assets/img/incons/instagram.svg'
import iconLinkedIn from '../../../../assets/img/incons/linkdin.svg'
const Footer_divisor2 = () => {
  return (
    <div className='footer__main_divisor footer__main_divisor-2'>
        <div className='footer__divisor-2 footer_address'>
            <p>Dirección: Calle Principal 123, Ciudad, País</p>
            <p>Teléfono: +123456789</p>
            <p>Correo electrónico: info@clinicadental.com</p>
        </div>

        <hr />

        <div className='footer__divisor-2 footer_schedules'>
            <p>Horario de atención:</p>
            <p>Lunes a viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábado: 9:00 AM - 1:00 PM</p>
            <p>Domingo: Cerrado</p>
        </div>

          <hr />

        <div className='footer__divisor-2 footer_social-media'>
            <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={iconWhatsapp} alt="icon of whatapp" />
            </a>

            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={iconLinkedIn} alt="icon of LinkIN" />
            </a>

            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={iconFacebook} alt="icon of facebook" />
            </a>

            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={iconInstagram} alt="icon of instagram" />
            </a>
        </div>
    </div>
  )
}

export default Footer_divisor2
