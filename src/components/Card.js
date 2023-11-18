import React from 'react'
import './Card.css'

function Card({title,content,img}) {
  return (
    <div className='card' >
        <h4>{title}</h4>
        <br/>
        <p>{content}</p>
        <img src={img} />
    </div>
  )
}

export default Card