import React, { useEffect } from 'react'
import './scss/footer.scss'
const Footer = () => {
  useEffect(()=>{
    console.log('se renderiza el footer')
  },[])

  return (
    <footer className='footer__main'>
     <h1 style={{color:'white'}}>esto es el footer</h1>
    </footer>
  )
}

export default Footer
