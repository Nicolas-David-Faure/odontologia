import React from 'react'
//components
import AppBook from './AppToBook/AppBook'

//styles
import './scss/book.scss'
//<AppBook />
const Book = () => {
  return (
    <main className='book__main'>
    {/* {  <section className='book__cont_availeble-bookings'>
          <div className="book__availeble-bookings">
              <h4>Arregla una cita desde nuestra aplicación</h4>
                <hr />

          </div>

          <div className="book__availeble-bookings">
              <h4>Arregla una cita desde Whatapp</h4>
              <hr />
          </div>

          <div className="book__availeble-bookings">
              <h4>Arregla una cita desde Calendly</h4>
              <hr />
          </div>
      </section>} */}


      <AppBook />

     {/* { <article className='book__article_plus_info'>
          <section className="book__section_plus_info"></section>
          <section className="book__section_plus_info"></section>
          <section className="book__section_plus_info"></section>
          <section className="book__section_plus_info"></section>
      </article>} */}
    </main>
  )
}




export default Book
