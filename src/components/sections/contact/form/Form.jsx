import React, { useState } from 'react';
//Styles
import './scss/form.scss';
const Form = () => {
  const [formData, setFormData] = useState({
    name:'',
    lastName:'',
    phoneNumber:'',
    email:'',
    text:''
  });

  const handleFormData =(e)=>{
    return  setFormData({...formData, [e.target.name] : e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }
 

  return (
    <form 
      className='form__main'
      onSubmit={handleSubmit}>
      <h2>Contactanos</h2>
      <div className='form__container_input-label'>
        <input
          onChange={(e)=>handleFormData(e)} 
          className='form__input' 
          type="text" name='name'
          placeholder='Nombre'
          required
          />
      </div>

      <div className='form__container_input-label'>  
        <input
          onChange={(e)=>handleFormData(e)}  
          className='form__input' 
          type="text" name='lastName'
          placeholder='Apellido'
          required
          />
      </div>

      <div className='form__container_input-label'>      
        <input 
          onChange={(e)=>handleFormData(e)} 
          className='form__input' 
          type="number" 
          name='phoneNumber'
          placeholder='Número de celular'
          required />
      </div>

      <div className='form__container_input-label'>
        <input
        onChange={(e)=>handleFormData(e)}  
        className='form__input' 
        type="email" name='email'
        placeholder='Email'
        required
        />
      </div>
      <textarea
       onChange={(e)=>handleFormData(e)}   
       className='form__textArea'
       placeholder='Ingrese su mensaje aquí.&#10;(Máximo 250 caracteres)'
       maxLength={250}
       name='text'
       required
       >
      </textarea>
    
      <div className='form__container_button'>
        <button
          
          className='form__button' 
         >Enviar</button>
      </div>

  </form>
  )
}

export default Form
