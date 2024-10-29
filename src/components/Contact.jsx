import React, { useEffect } from 'react'
import PageTitle from './PageTitle';

function Contact() {

  useEffect(() => {
    let userMail = localStorage.getItem("userMail");
    console.log('USer email in contact page')
    
  }, []);

  return (
    <div>

      <PageTitle title="Contact Us" />
      Contact</div>
  )
}

export default Contact