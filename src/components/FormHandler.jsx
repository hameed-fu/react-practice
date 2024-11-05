import React, { useEffect, useRef, useState } from 'react'

function FormHandler() {

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let[border1, setBorder1] = useState({
    border: 'none'
  })


 
  const [image, setImage] = useState(null);

  let password = useRef('')
  let address = useRef('')

  let para = useRef('test')

 
  const handleSubmit = (event) => {
    event.preventDefault()

    if(name == ''){
      alert('Fill the name')
      return false;
    }

    let add = address.current.value 

    console.log("address", add)
    
    console.log('Form submitted', name, email, password.current.value );
  }


  useEffect(() => {

    setInterval(() => {
      setName('Ali')
      setBorder1({
        border: '1px solid red'
      })
    }, 3000);

  },[])

  // const styled = () => {
  //   border-color: red
  // }


  const uploadImage = (e) => {
    let img = e.target.files[0]
    if(img){
      let url = URL.createObjectURL(img);

      console.log(url)
      setImage(url)
    }
    console.log(img)
  }

  
  return (
    <div className='container'>
      
      <h2>Form handling</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) =>setName(e.target.value) } style={border1} placeholder='Eneter you name' className='form-control' />
        </div>

        <div className='mt-2'>
          <input type="text" value={email} onChange={(e) =>setEmail(e.target.value) } placeholder='Eneter you email' className='form-control' />
        </div>

        <div className='mt-2'>
          <input type="text" ref={password} placeholder='Eneter you Password' className='form-control' />
        </div>
          <input type="text" ref={address} placeholder='Eneter you address' className='form-control' />
          <input type="file" onChange={uploadImage}   className='form-control mt-2' />



          <div className='mt-2'>


      {image && (
        <div style={{ marginTop: "20px" }}>
          <img src={image} alt="Uploaded Preview" style={{ width: "200px", height: "auto" }} />
        </div>
      )}

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
        <p>para : <input type="text" ref={para} /></p>
      </div>
    </div>
  )
}

export default FormHandler