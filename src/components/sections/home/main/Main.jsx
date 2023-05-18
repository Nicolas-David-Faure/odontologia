import React from 'react'
//styles
import './scss/main.scss'
const Main = () => {
  return (
    <main className='main__container'>
      <div className='main__container_divisors'>
      <div className="main__divisors">
          <h2>Examen dental y limpieza:</h2>
            <p>El dentista realiza una evaluación general de la salud bucal, 
            verifica la presencia de caries, realiza radiografías 
            si es necesario y realiza una limpieza profesional para eliminar la placa y el sarro.</p>
      </div>
      <div className="main__divisors"> 
          <p>Hola a todos esto es un parrafo para demostrar que 
            se puede corregir este problema con una simple caja dentro del divisor</p>
      </div>
      <div className="main__divisors">
          <p>Hola a todos esto es un parrafo para demostrar 
            que se puede corregir este problema con una simple caja dentro del divisor</p>
      </div>
      <div className="main__divisors">
        <p>Hola a todos esto es un parrafo para demostrar que
           se puede corregir este problema con una simple caja dentro del divisor</p>
      </div>
  </div>
    </main>
  )
}

export default Main
