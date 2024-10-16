import React from 'react'

export const Footer = ({name, year}) => {

console.log(name)
  return (
    <div className='text-info'>Design by {name} - {year}</div>
  )
}
