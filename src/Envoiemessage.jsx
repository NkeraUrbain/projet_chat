import React, { Component } from 'react'

const  Envoiemessage = () =>  {
    
    return (
<main className='border-10px'>
    <div className='d-flex form-control w-50'>
        <div className=' d-flex flex-column '>
          <p className='text-primary text-uppercase'> Formulaire d'envoie Message</p>
          <button className='btn-primary btn m-1'> Message de...</button>
          <textarea className='text-center'  placeholder='Votre Message ici'></textarea>
          <button type='button' className='btn-primary'>Envoi message</button>
        </div>

      <div className='d-flex flex-column form-control w-50 '>
        <button className='text-center text-primary'> Message reçu</button>
        <button className='text-center text-primary'> Message reçu</button>
        <button className='titre text-center text-primary'> Message reçu</button>
        <button className='titre text-center text-primary'> Message reçu</button>
        <button className='titre text-center text-primary'> Message reçu</button>
      </div>
    </div>
  </main>
    )
  }

  export default Envoiemessage

