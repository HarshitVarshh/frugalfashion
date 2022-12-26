import React from 'react'
import './Card.css'

function Card({title,content}) {
  return (
    <div className='card' >
        <h4>{title}</h4>
        <br/>
        <p>{content}</p>
    </div>
  )
}

export default Card