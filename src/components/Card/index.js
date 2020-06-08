import React from 'react'
import propTypes from 'prop-types'
import './card.css'


export default function Card({ handleClick, id, flipped, back, front, height, width }) {
  return <div
    className={`flip-container ${flipped ? 'flipped' : ''}`} 
    style={{
      width, height
    }}
    onClick={() => handleClick(id)}
    >
    <div className="flipper">
      <img alt=""
        style={{
          height, width
        }}
        className={flipped ? 'front' : 'back'}
        src={flipped ? front : back}
        />

    </div>
  </div>
}

Card.propTypes = {
  handleClick: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  flipped: propTypes.bool.isRequired,
  back: propTypes.string.isRequired,
  front: propTypes.string.isRequired,
  height: propTypes.number.isRequired,
  width: propTypes.number.isRequired
}