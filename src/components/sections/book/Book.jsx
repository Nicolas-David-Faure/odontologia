import React from 'react'
//components
import AppBook from './AppToBook/AppBook'

//styles
import './scss/book.scss'

const Book = () => {
  return (
    <main className='book__main'>
      <p>Para agendar una cita por favor comunicate con nuestro asistentes por whatsApp o vía llamada telefónico</p>

     <AppBook />
    </main>
  )
}

export default Book
