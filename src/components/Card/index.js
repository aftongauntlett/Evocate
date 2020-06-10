import React from 'react'
import './Card.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';


const Card = props => {
  const {cardImage, cardTop, flipped, onClick} = props
  const img = flipped ? cardImage : cardTop
  return (
    <Flippy
    flipOnHover={false} // default false
    // flipOnClick={true} // default false
    isFlipped={flipped}
    // onClick={onClick}
    flipDirection="horizontal" // horizontal or vertical
    // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    ref={(r) => onClick()} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '100px', height: '100px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      // style={{
      //   backgroundColor: '#41669d',
      // }}
    >
      <img src={cardTop} alt="main"/>
    </FrontSide>
    <BackSide
      // style={{ backgroundColor: '#175852'}}
      >
      <img src={cardImage} alt="top"/>
    </BackSide>
  </Flippy>
    // <div className="Card" onClick={onClick}>
    //   <img src={img} alt=""/>
    // </div>
  )
}

export default Card