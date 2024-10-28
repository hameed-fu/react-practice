import React, { useRef, useState } from 'react'

function FormHandler() {

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')

  let password = useRef('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if(name == ''){
      alert('Fill the name')
      return false;
    }
    
    console.log('Form submitted', name, email, password.current.value );
  }

  
  return (
    <div className='container'>
      
      <h2>Form handling</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) =>setName(e.target.value) } placeholder='Eneter you name' className='form-control' />
        </div>

        <div className='mt-2'>
          <input type="text" value={email} onChange={(e) =>setEmail(e.target.value) } placeholder='Eneter you email' className='form-control' />
        </div>

        <div className='mt-2'>
          <input type="text" ref={password} placeholder='Eneter you Password' className='form-control' />
        </div>
        <div className='mt-3'>
          <button className='btn btn-primary' type='submit'>Save</button>
        </div>
      </form>

      <div className='mt-3'>
        <h3>Form Data</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password.current.value}</p>
      </div>
    </div>
  )
}

export default FormHandler