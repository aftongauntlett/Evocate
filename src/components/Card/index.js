import React from "react";
import "./card.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const Card = (props) => {
  const { cardImage, cardTop, flipped, onClick } = props;
  return (
    <Flippy
      className="my-flippy"
      flipOnHover={false}
      isFlipped={flipped}
      flipDirection="horizontal"
      style={{ width: "100px", height: "100px" }}
    >
      <FrontSide onClick={onClick}>
        <img src={cardTop} alt="main" />
      </FrontSide>
      <BackSide>
        <img src={cardImage} alt="top" />
      </BackSide>
    </Flippy>
  );
};

export default Card;
