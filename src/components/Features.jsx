import React from 'react'
import './features.css'

const Features = ({number, tag, text}) => {
  return (
    <div className='features' >
      <h3>{number}</h3>
      <p>{tag}</p>
      <p>{text}</p>
    </div>
  )
}

export default Features