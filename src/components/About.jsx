import React, { useEffect } from 'react'
import Content from './Content'
import { Link } from 'react-router-dom'

function About() {

    useEffect(() => {
        console.log('I am effect calling by about us page')
    })
  return (
    <div>
        <Content />

        <div>
           
                <Link className='btn btn-primary' to="/contact">Go to Contact</Link>
            
        </div>
    </div>
  )
}

export default About