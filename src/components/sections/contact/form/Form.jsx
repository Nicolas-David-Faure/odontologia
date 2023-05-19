import React from 'react';
//Styles
import './scss/form.scss';
const Form = () => {
  return (
    <form className='form__main' action={null}>
      <h2>Contactanos</h2>
      <div className='form__container_input-label'>
        <input 
          className='form__input' 
          type="text" name='name'
          placeholder='Nombre'
          required
          />
      </div>

      <div className='form__container_input-label'>  
        <input 
          className='form__input' 
          type="text" name='lastName'
          placeholder='Apellido'
          required
          />
      </div>

      <div className='form__container_input-label'>      
        <input 
          className='form__input' 
          type="number" 
          name='phoneNumber'
          placeholder='Número de celular'
          required />
      </div>

      <div className='form__container_input-label'>
        <input 
        className='form__input' 
        type="email" name='email'
        placeholder='Email'
        required
        />
      </div>
      <textarea 
       className='form__textArea'
       placeholder='Ingrese su mensaje aquí.&#10;(Máximo 250 caracteres)'
       maxLength={250}
       required
       >

      </textarea>
    
      <div className='form__container_button'>
        <button 
          className='form__button' 
          type='button'>Enviar</button>
      </div>

  </form>
  )
}

export default Form
