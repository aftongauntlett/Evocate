import React, { Component } from "react";
import react from '../../../images/react.png'
import Board from '../../Board/Board'
import cardTop from '../../../images/blank.png'

// import "./styles.css";
function setupCards() {
  let id = 0
  const images = [ react ]
  const cards = []
  images.forEach(image => {
    let card = {
      id:id,
      type: image.type,
      cardTop,
      cardImage: image,
      flipped: false
    }
    id++;
    cards.push(card)
    card = JSON.parse(JSON.stringify(card))
    card.id=id
    cards.push(card)
    id++
  });
  return suffle(cards)
}

function suffle(cardList) {
  let len = cardList.length
  for (let i = 0; i < len; i++) {
    let randomCard = Math.floor(Math.random() * len)
    let copyCurrent = cardList[i]
    let copyRandom = cardList[randomCard] 
    cardList[i] = copyRandom
    cardList[randomCard] = copyCurrent
  }
  console.log(cardList)
  return cardList
}

export default class index extends Component {
  render() {
    const cards = setupCards()
    return (
      <div className="App">
        <Board cards={cards} />
      </div>
    )
    // return <div>Main Game!</div>;
  }
}